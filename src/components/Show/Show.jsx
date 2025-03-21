import React from "react";
import axios from "axios";

const Show = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(Show).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};