// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Legitize is ReentrancyGuard{
    address payable public immutable feeAccount; //
    uint public immutable feePercent;
    uint public itemCount;

    struct Item{
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }

    event Offered(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );

    event Bought(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer
    );

    mapping(uint => Item) public Items;

    constructor(uint _feePercent){
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }

    function listItem(IERC721 _nft, uint _tokenId, uint _price) external nonReentrant{
        require(_price > 0, "Price must be greater than Zero");
        itemCount ++;

        _nft.transferFrom(msg.sender, address(this), _tokenId);

        Items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );

        emit Offered(itemCount, address(_nft), _tokenId, _price, msg.sender);
    }

    function buyItem(uint _itemId) external payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = Items[_itemId];

        require(_itemId>0 && _itemId <= itemCount, "Item doesn't exist");
        require(msg.value >= _totalPrice, "Not enough ether to cover item price and market fee");
        require(!item.sold, "Item already sold");

        //Pay the seller
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price); //Pay the marketplace's owner.

        //Change the state of the NFT as sold
        item.sold = true;

        //transfer NFT to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);

        emit Bought(_itemId, address(item.nft), item.tokenId, item.price, item.seller, msg.sender);
    }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return(Items[_itemId].price*(100 + feePercent)/100);
    }

    function chagePrice(uint _itemId, uint _price) external nonReentrant{
        Item storage item = Items[_itemId];

        require(msg.sender == item.seller, "Only the seller can change the Price");
        require(_price > 0, "Price must be greater than Zero");

        item.price = _price;
    }


    function buyToClose(uint _itemId) public payable nonReentrant{

        uint zeroPrice = 0;
        Item storage item1 = Items[_itemId];

        
        require(_itemId>0 && _itemId <= itemCount, "Item doesn't exist");
        require(msg.sender == item1.seller, "Only the seller can unlist the item");
        require(msg.value >= zeroPrice, "Not enough ether to cover item price and market fee");
        require(!item1.sold, "Item unlisted");

        //Change the price to zero
        item1.price = zeroPrice;

        //Pay the seller
        item1.seller.transfer(item1.price);
        feeAccount.transfer(item1.price); //Pay the marketplace's owner.

        //Change the state of the NFT as sold
        item1.sold = true;

        //transfer NFT to buyer
        item1.nft.transferFrom(address(this), msg.sender, item1.tokenId);

        emit Bought(_itemId, address(item1.nft), item1.tokenId, item1.price, item1.seller, msg.sender);
    }
}