const Pet = ({name,animal,breed}) =>{
    return React.createElement("div",{},[
        React.createElement("h1",{},name),
        React.createElement("h2",{},animal),
        React.createElement("h2",{},breed)
    ]);
};

const App = () =>{
    return React.createElement(
        "div",
        {},[
            React.createElement("h1",{},"Adopt Me!"),
            React.createElement(Pet,{name:"Luna",animal:"dog",breed:"havanese"}),   
            React.createElement(Pet,{name:"Pepper",animal:"bird",breed:"cockatiel"}),
            React.createElement(Pet,{name:"doink",animal:"cat",breed:"Mixed"})
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);
