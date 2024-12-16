import TodoManager from "../components/TodoManager";
const Home = ({userDetails}) => {
    
    return (
        <>
            <h1>Home</h1>
            <TodoManager userDetails={userDetails}/>
        </>
    );
}

export default Home;