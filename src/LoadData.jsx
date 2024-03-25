import { useEffect, useState } from "react";
import Post from "./Post";

const LoadData = () => {
    // declare a use state to hold data that can be changed 
    const [posts, setPosts] = useState([]);

    // load data 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data => setPosts(data));
    },[]);
    
    return (
        <div>
            <h3>Loading Data From API</h3>
            <p>Total no of posts: {posts.length}</p>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default LoadData;