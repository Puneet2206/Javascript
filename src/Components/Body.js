// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { useEffect, useState } from "react";

// const Body=()=>{

//   //State Varibale - Super powerful variable - hooks - useState
// const [ListOfRestaurants,setListOfRestaurants]=useState([]);
// const [filteredRestaurant, setFilteredRestaurant]=useState([]);

// const [searchText, setSearchText]=useState("");
// //whenever state var update, react triggers a reconcilation cycle(re-renders the component)
// console.log("body ");


// useEffect(()=>{
//   fetchData();
// },[]);

// const fetchData=async()=>{
//   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
//   const json=await data.json();

//   console.log(json);
//   console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  
//   setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// };

// //Conditional Rendering
// // if(ListOfRestaurants.length===0){
// //  return <Shimmer />
// // }
  
//     return ListOfRestaurants.length===0 ? <Shimmer /> :(
//       <div className='body'>
//         <div className='filter'>
//           <div className="search">
//             <input type="text" className="search-box" value={searchText} onChange={(e)=>{
//               setSearchText(e.target.value);
//             }}></input>
//             <button onClick={()=>{
//               console.log(searchText);
              
//               const filteredRestaurants=ListOfRestaurants.filter((res)=>
//                   res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.externalRatings?.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filteredRestaurants);
//             }
              
//             }>Search</button>
//           </div>

//           <button className="filter-btn" 
//           onClick={()=>{
//             const filteredList=ListOfRestaurants.filter(
//               (res)=>res?.info?.avgRating > 4.5
//                           );
//             setListOfRestaurants(filteredList);
//             //console.log(ListOfRestaurants);
//           }}
//           >Top Rated Restaurants</button>
//         </div>
//         <div className='res-container'>
//           {
//           filteredRestaurant.map(restaurant=>(                                     //rendering data
//             <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//           ))};
//         </div>
//       </div>
//     )
//   }

//   export default Body;


import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const response = await fetch("https://www.google-analytics.com/g/collect?v=2&tid=G-34JYJ0BCRN&gtm=45je5421h1v899483351z878036788za200zb78036788&_p=1743733285480&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=102788824~102803279~102813109~102887799~102926062~102975949~103016951~103021830~103027016&cid=1504796934.1736690613&ul=en-gb&sr=1440x900&uaa=x86&uab=64&uafvl=Chromium%3B134.0.6998.178%7CNot%253AA-Brand%3B24.0.0.0%7CGoogle%2520Chrome%3B134.0.6998.178&uamb=0&uam=&uap=Windows&uapv=19.0.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1743733284&sct=19&seg=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants&dr=https%3A%2F%2Fwww.swiggy.com%2F&dt=Order%20Food%20Online%20from%20India%27s%20Best%20Food%20Delivery%20Service%20%7C%20Swiggy&en=page_view&tfd=5382", {
      method: "POST",
      // ...
    });
    
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    }
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = ListOfRestaurants.filter((r) =>
                r?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
