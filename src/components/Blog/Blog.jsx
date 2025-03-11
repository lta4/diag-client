import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const getPostData = () => {
      axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your_medium_username")
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
            <div>
            {posts.map((post) => (
                <div key={post.guid}>
                <h2>{post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.content }} />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="blank">
                    Read more
                </a>
            </div>
            ))}
        </div>
      </div>
    );
  };

  export default Blog;