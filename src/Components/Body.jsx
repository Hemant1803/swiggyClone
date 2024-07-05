import ResturantCard from "./ResturantCard";
import reslistData from "../Utils/mockData";
import { useEffect, useState } from "react";
import { Simmer } from "./SimmerCard";

function Body() {
  const [reslist, setReslist] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setReslist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (reslist.length === 0) {
    return <Simmer />;
  }

  const searchFunction = () =>{
    const filterByName = reslist.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filterByName);
    console.log(filterByName);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchFunction()
    }
  };
 
  

  return (
    <div className="h-full flex-1 flex flex-col ">
      <div className="flex ">
        <button
          className="m-3 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          onClick={() => {
            const filteredList = reslist.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilterList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className=" m-3 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <button
          className="my-3 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          onClick={searchFunction}
         
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filterList.map((resturant) => (
          <ResturantCard key={resturant.info.id} reslist={resturant} />
        ))}
      </div>
    </div>
  );
}
export default Body;
