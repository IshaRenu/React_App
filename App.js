        const heading = React.createElement("div", {id:"parent", xyz:""}, [React.createElement("div", {id:"child1", xyz:""}, 
                    [React.createElement("h1", {id:"heading", xyz:""}, "Hello World Tag h1!"),
                     React.createElement("h2", {id:"heading", xyz:""}, "Hello World Tag h1!")
                ]), 
                React.createElement("div", {id:"child2", xyz:""}, 
                    [React.createElement("h1", {id:"heading", xyz:""}, "Hello World Tag h1!"),
                     React.createElement("h2", {id:"heading", xyz:""}, "Hello World Tag h1!")
                ])]);
        //console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        console.log(root);
        root.render(heading);