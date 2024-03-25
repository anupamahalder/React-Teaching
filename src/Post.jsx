
const Post = ({post}) => {
    // destructure 
    const {userId, title, body} = post;
    const myStyle ={
        border: '2px solid olive',
        margin: '10px',
        borderRadius: '8px',
        padding: '15px'
    }
    return (
        <div style={myStyle}>
            <h3>Post title: {title}</h3>
            <p>Post User Id: {userId}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;