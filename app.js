//const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello from React");

//reactElement(obj)-=>HTML(browser understood)

/* const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[                  //usimg array braces to show child at same level(multiple child)
        React.createElement("h1",{},"h1 elemnt"),
        React.createElement("h2",{},"h2 elemnt")
]),
React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"h1 tag"),                        // {}-> give attribute(props/child) details
            React.createElement("h2",{},"h2 tag")
        ]),
]);   */

const parent=React.createElement("h1",{id:"Parent"},
    React.createElement("div",{id:"Child1"},
        React.createElement("div",{id:"Child2"},[
            React.createElement("h1",{},"its h1 child"),
            React.createElement("h2",{},"h2 elmnt")
        ])
    ),
    React.createElement("h1",{id:"Parent2"},
    React.createElement("div",{id:"child1"},
        React.createElement("div",{id:"child2"},  
            React.createElement("h1",{},"h1 tag")     
    )
    )
)); 

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

 //obj
console.log(parent);

