import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu=()=>{

    const [resInfo, setResInfo]= useState(null);

    const params=useParams();
    console.log(params);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=570165&catalog_qa=undefined&submitAction=ENTER");

        const json= await data.json();

        console.log("helo")
        console.log(json);
        setResInfo(json.data);
        
        
    }

    if(resInfo===null) return <Shimmer />;

    const {name, costForTwoMessage, cuisines, avgRating}=resInfo?.cards[2]?.card?.card?.info;

   const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories[0]?.itemCards;
    console.log("fertet");
    //console.log(itemCards[1]?.card?.card?.carousel[0]?.title);
    console.log(itemCards);
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.name}>
                        {item.card.info.name} - {"Rs"} - {item.card.info.variantsV2.pricingModels[0].price / 100}
                        </li>
                ))}
                {/* <li>{itemCards[4]?.card?.info?.name} - {itemCards[4]?.card?.info?.price}</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
