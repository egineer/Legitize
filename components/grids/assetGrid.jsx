import AssetItem from "../items/assetItem";

const AssetGrid = ({assets})=>{
    return(
      <div class="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
        {
            assets.map((asset,index)=>{
                return(
                    <AssetItem item={asset}/>
                )
            })
        }
      </div>
    )
}

export default AssetGrid;