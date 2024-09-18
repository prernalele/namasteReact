    // const heading = React.createElement(
    //     "h1",
    //     {id: "heading", xyz:"abc"}, "Hello world from React")
    // const root = ReactDOM.createRoot(document.getElementById("root"))
    const root = ReactDOM.createRoot(document.getElementById("root"))
    const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "I am an h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "I am an h2 tag"
        )]
        )

    )
    
    console.log("parent", parent)
    root.render(parent)