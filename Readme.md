Starting React

//import { createRoot } from 'react-dom/client';

#Parcel
- Dev Build
- Local Server
- HMR => Hot Module Replacement
- File Watching Algo - C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Diff dev and prod bundles


#crrating h1 in JS
    <!-- 
<h1>Puneet</h1>
   
    <script>
        const heading=document.createElement('h1');
        heading.innerHTML="Welcome to JS ";

        const root=document.getElementById("root");
        root.appendChild(heading);
    </script>
   

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

-->



#Food app Layout
/**
 * Header
 *  - logo
 *  - nav items(home, cart)
 * Body
 *  - search
 *  - restaurantcontainer
 *  - restaurantcard
 *      - Img
 *      - Name of res, star rating, cuisine, delivery time
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */


//React.createElement=> ReactElement-JS Object => HTMLElement(Render)

//const heading=React.createElement(
  //"h1",
  //{id:"heading"},
  //"Namastey React"  
//);


/*
const Heading=()=>(
  <h1 id="heading">
  "Namastey React"  
  </h1>
);

console.log(heading);
root.render(heading);

//JSX (transpiled before it  reaches the JS) - babel
//JSX => Babel transpiles to ReactElement =>ReactElement-JS Object => HTMLElement(Render)


//react element==> which eod is js obj
const jsxHeading=<h1 id="heading">Namastey React using jsx</h1>;

console.log(jsxHeading);
root.render(jsxHeading);


//React Functoinal Component
const HeadingComponent=()=>(
  <div>
    {2+7}
    <Heading />  
    <Heading></Heading>     
    {Heading()}        
   <h1 className='head'>Functoinal Component</h1>
   
   </div>
);

//component compositoin - line 31

const HeadingComponent1=()=><h1>0 react</h1>;

//jsx avoid malicious attacks of api

const HeadingComponent3=()=>(
  <div>
      <h1>1 react</h1>
  </div>
);

root.render(<HeadingComponent />); //render converting code nto html nd browser is rendering it


//const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello from React");

//reactElement(obj)-=>HTML(browser understood)

//creating react element (||ar to DOM Elements) => HTMLElement(render to DOM)

/* const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[                  //usimg array braces to show child at same level(multiple child)
        React.createElement("h1",{},"h1 elemnt"),
        React.createElement("h2",{},"h2 elemnt")
]),
React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"h1 tag"),                        // {}-> give attribute(props/child) details
            React.createElement("h2",{},"h2 tag")
        ]),
]);   

<RestaurantCard resData={resList[0]} />
<RestaurantCard resData={resList[13]} />
<RestaurantCard resData={resList[16]} />
<RestaurantCard resData={resList[3]} />
<RestaurantCard resData={resList[4]} />
<RestaurantCard resData={resList[5]} />
<RestaurantCard resData={resList[6]} /> 
*/

//const parent=React.createElement("h1",{id:"Parent"},
    //React.createElement("div",{id:"Child1"},
    //    React.createElement("div",{id:"Child2"},[
    //        React.createElement("h1",{},"its my child"),
     //       React.createElement("h2",{},"namastey")
     //   ])
    //),
    //React.createElement("h1",{id:"Parent2"},
    //React.createElement("div",{id:"child1"},
        //React.createElement("div",{id:"child2"},  
      //      React.createElement("h1",{},"h1 tag")     
    //)
  //  )
//)); 

//const root=ReactDOM.createRoot(document.getElementById("root"));     //with the cmnted import
//const root=createRoot(document.getElementById("root"));

//root.render(parent);

 //obj
//console.log(parent);

#Default import/export
- export default name;
- import name from "path";

#Named import/export
- export const name;
- import {name} from "path";


#React is fast in dom-manipulation

#ui and data layre are in sync

# React Hooks
  (normal JS Utility Function)
  - useState()  - superpowerful state var in react
  - useEffect()

Statevariable bcoz it maintains state of the component

  #somebody would have exported React from node_modules thats why we are able to use it by importing

  // const [ListOfRestaurants, setListOfRestaurants]=useState([{
//       "info": {
//       "id": "675968",
//       "name": "Natural Ice Cream",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/389fbb87-fbff-4afb-be06-19ce8b734318_675968.JPG",
//       "areaName": "Sector 7A",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//       "Ice Cream",
//       "Desserts"
//       ],
//       "avgRating": 4.7,
//       }
//     },
//       {
//         "info": {
//       "id": "675966",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/389fbb87-fbff-4afb-be06-19ce8b734318_675968.JPG",
//       "areaName": "Sector 7A",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//       "Ice Cream",
//       "Desserts"
//       ],
//       "avgRating": 2.7,
//       }
// }]
//     );

 //setListOfRestaurants([]);

  //Normal JS variable
//   let ListOfRestaurants =[
//   {
//     "info": {
//     "id": "675968",
//     "name": "Natural Ice Cream",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/389fbb87-fbff-4afb-be06-19ce8b734318_675968.JPG",
//     "areaName": "Sector 7A",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//     "Ice Cream",
//     "Desserts"
//     ],
//     "avgRating": 4.7,
//     }
//   },
//     {
//       "info": {
//     "id": "675966",
//     "name": "KFC",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/389fbb87-fbff-4afb-be06-19ce8b734318_675968.JPG",
//     "areaName": "Sector 7A",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//     "Ice Cream",
//     "Desserts"
//     ],
//     "avgRating": 4.7,
//     }
//   }
// ];
  