import { CDN_URL } from "../Utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,avgRating,costForTwo,cuisines,deliveryTime}= resData?.info;         //optional chaining
    //console.log(props);
    return(
      <div className='res-card' style={{backgroundColor:"yellow"}}>
        <img 
        className='res-logo'
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{cuisines.trun}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }

  export default RestaurantCard;
  