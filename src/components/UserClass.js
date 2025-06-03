import React from "react";

class UserClass extends React.Component
{
    constructor(props) {
        super(props);
        console.log("Constructor called");
        console.log(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        const incrementFn = () => {
            this.setState({
                count: this.state.count + 1
            });


        }
        return(
        <div className="user-card">
            <h1>User Page</h1>
            <h2>Count: {this.state.count} <button onClick={incrementFn}>ClickMeClassComponent</button> </h2>
            <h2>Name: {this.props.name}</h2>
            <h3>Location : {this.props.location}</h3>
            <h4>Contact : {this.props.contact} </h4>
        </div>
    );

    }
}

export default UserClass;
