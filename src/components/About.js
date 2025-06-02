import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div style={{ marginTop: "100px", padding: "20px" }}>
            <h1>About</h1>
            <p>This is the About page of our food delivery application.</p>
            <p>We are a team of passionate food lovers who want to bring the best food to your doorstep.</p>
            <User name={"Akshay Saini (functional Component)"} location={"Lucknow"} contact={"@akshay"}/>
            <UserClass/>
        </div>
    );
}

export default About;
