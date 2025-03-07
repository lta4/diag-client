import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const getPostData = () => {
        axios
            .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrew4ld")
            .then((res) => {
                setPosts(res.data.items);
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
            });
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.guid}>
                    <h2>{post.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: post.content }} />
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Blog;