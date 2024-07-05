import { CDN_URL } from "../Utils/constants";
import reslist from "../Utils/mockData";

function ResturantCard(props) {
    const { reslist } = props
    const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } = reslist?.info;

    return (<>

        <div className=" w-56   hover:border hover:border-black bg-gray-100 p-1 m-3  cursor-pointer rounded-2xl " >
            <img className="h-44  w-64 rounded-2xl pb-3" src={CDN_URL + cloudinaryImageId} alt=""></img>
            <h1 className="font-bold">{name}</h1>
            <h4 className="pb-1">{avgRating} Stars</h4>
            <h4 className="pb-1">{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
        </div>
    </>
    )
}


export default ResturantCard;
