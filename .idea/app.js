/**
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1> This is h1 tag from React</h1>
 *     </div>
 * </div>
 *
 * <div id="parent">
 *     <div id="child">
 *          <h1 id="h1Heading"> This is h1 heading from React Sibling 1 </h1>
 *
 *          <h2 id="h2Heading> This is h2 heading from React Sibling 2</h2>
 *    </div>
 * </div>
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1 id="h1child"> This is h1 child</h1>
 *         <h2 id="h2child"> This is h2 child </h2>
 *     </div>
 *
 *     <div id="child2">
 *         <h1 id="h1child2"> this is h1 child2</h1>
 *         <h2 id="h2child2"> this is h2 child2</h2>
 *     </div>
 * </div>
 */


document.addEventListener('DOMContentLoaded', function() {
    const reactDivElement = document.createElement("div");
    reactDivElement.id = "react-root";
    document.body.appendChild(reactDivElement);
    const heading = React.createElement(
        "h1",
        {id:"reactHeading"},
        "Hello World from React"
    );

    const heading3 = React.createElement(
        "div",
        {id:"parent"},[
            React.createElement(
                "div",
                {id:"child"},[
                    React.createElement(
                        "h1",
                        {id:"h1child"},
                        "This is h1 child from React Sibling 1 child"
                    ),
                    React.createElement(
                        "h2",
                        {id:"h2child"},
                        "This is h2 heading from React Sibling 2 child"
                    )
                ]
            ),

            React.createElement(
                "div",
                {id:"child2"},[
                    React.createElement(
                        "h1",
                        {id:"h1child2"},
                        "This is h1 heading from React Sibling 1 child2 "
                    ),
                    React.createElement(
                        "h2",
                        {id:"h2child2"},
                        "This is h2 heading from React Sibling 2 child2 "
                    )
                ]
            )
        ]

    );
    const heading2 = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},
            [React.createElement(
                "h1",
                {id:"h1Heading"},
                "This is h1 heading from React Sibling 1 "),
                React.createElement(
                    "h2",
                    {id:"h2Heading"},
                    "This is h2 heading from React Sibling 2 "
                )

            ]
    )

    );

    console.log(heading3);

    const root = ReactDOM.createRoot(document.getElementById("react-root"));
    root.render(heading3);
});