const { expect } = require("chai");
const { ethers } = require("hardhat");
const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Legitize", function(){
    
    let deployer, add1, add2, nft, marketplace;
    let feePercent = 2;
    let URI = "Sample URI"

    beforeEach(async function (){
        const NFTMint = await ethers.getContractFactory("NFTMint");
        const Legitize = await ethers.getContractFactory("Legitize");

        [deployer, add1, add2] = await ethers.getSigners()

        nftMint = await NFTMint.deploy();
        legitize = await Legitize.deploy(feePercent);
    });

    describe("Deployment", function(){
        it("Should track name and symbol of the NFT collection", async function(){
            expect(await nftMint.name()).to.equal("Legitize NFT")
            expect(await nftMint.symbol()).to.equal("LGT")
        })
        it("Should track feeAccount and feePercent of the NFT collection", async function(){
            expect(await legitize.feeAccount()).to.equal(deployer.address)
            expect(await legitize.feePercent()).to.equal(feePercent)
        })
    })

    describe("Minting NFT", function(){
        it("Should track each minted NFT", async function(){

            await nftMint.connect(add1).mint(URI)
            expect(await nftMint.tokenCount()).to.equal(1);
            expect(await nftMint.balanceOf(add1.address)).to.equal(1);
            expect(await nftMint.tokenURI(1)).to.equal(URI);

            await nftMint.connect(add2).mint(URI)
            expect(await nftMint.tokenCount()).to.equal(2);
            expect(await nftMint.balanceOf(add2.address)).to.equal(1);
            expect(await nftMint.tokenURI(2)).to.equal(URI);
        });
    })

    describe("Listing a new item", function(){
        beforeEach(async function(){
            await nftMint.connect(add1).mint(URI)
            await nftMint.connect(add1).setApprovalForAll(legitize.address, true)
        })
        it("Should track newly listed item transfer from seller to market place and emit offer event", async function(){
            await expect(legitize.connect(add1).listItem(nftMint.address, 1, toWei(1)))
                .to.emit(legitize, "Offered")
                .withArgs(
                    1,
                    nftMint.address,
                    1,
                    toWei(1),
                    add1.address
                )
            expect(await nftMint.ownerOf(1)).to.equal(legitize.address);
            expect(await legitize.itemCount()).to.equal(1)

            const Item = await legitize.Items(1)
            expect(Item.itemId).to.equal(1)
            expect(Item.nft).to.equal(nftMint.address)
            expect(Item.tokenId).to.equal(1)
            expect(Item.price).to.equal(toWei(1))
            expect(Item.sold).to.equal(false)

        });

        it("Should fail if the price is set to zero", async function(){
            await expect(legitize.connect(add1).listItem(nftMint.address, 1, 0))
                .to.be.revertedWith("Price must be greater than Zero");
        });
    });

    describe("Purchasing Market place item", function(){
        let price = 2
        let totalPriceInWei
        beforeEach(async function(){
            await nftMint.connect(add1).mint(URI)
            await nftMint.connect(add1).setApprovalForAll(legitize.address, true)
            await legitize.connect(add1).listItem(nftMint.address, 1, toWei(2))
        })

        it("Should update item to sold, pay seller, transfer NFT to buyer, charges fee and emit bought event", async function(){
            const sellersInitialEthBalance = await add1.getBalance()
            const feeAccountInitialEthBalance = await deployer.getBalance()

            totalPriceInWei = await legitize.getTotalPrice(1);

            await expect(legitize.connect(add2).buyItem(1, {value: totalPriceInWei}))
                .to.emit(legitize, "Bought")
                .withArgs(
                    1,
                    nftMint.address,
                    1,
                    toWei(price),
                    add1.address,
                    add2.address
                )
            const sellersFinalEthBalance = await add1.getBalance()
            const feeAccountFinalEthBalance = await deployer.getBalance()

            expect(+fromWei(sellersFinalEthBalance)).to.equal(+price + +fromWei(sellersInitialEthBalance))
            const fee = (feePercent/100) * price
            expect(+fromWei(feeAccountFinalEthBalance)).to.equal(+fee + +fromWei(feeAccountInitialEthBalance))
            expect(await nftMint.ownerOf(1)).to.equal(add2.address);
            expect((await legitize.Items(1)).sold).to.equal(true)
        })

        it("Should fail for invalid Item Ids, Sold Items and when not enough Ether is paid", async function(){
            await expect(
                legitize.connect(add2).buyItem(2, {value: totalPriceInWei})
            ).to.be.revertedWith("Item doesn't exist");
            await expect(
                legitize.connect(add2).buyItem(0, {value: totalPriceInWei})
            ).to.be.revertedWith("Item doesn't exist");
            await expect(
                legitize.connect(add2).buyItem(1, {value: toWei(price)})
            ).to.be.revertedWith("Not enough ether to cover item price and market fee");
            await legitize.connect(add2).buyItem(1, {value: totalPriceInWei})

            await expect(
                legitize.connect(deployer).buyItem(1, {value: totalPriceInWei})
            ).to.be.revertedWith("Item already sold");
        });
    })
})
