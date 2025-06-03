import {useState} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className="user-card">
            <h1>User Page</h1>
            <h2>Count: {count} <button onClick={handleIncrement}>Increment</button></h2>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: {props.contact}</h4>
        </div>
    );
}

export default User;
