import React, { useEffect, useState } from "react";
import axios from "axios";

// const baseURL = "https://andrew4ld.medium.com/mix-22459474be3a?source=friends_link&sk=9299dc4e69981caf0662596f217e3687/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

const Show = () => {

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
      {posts.map((post) => {
        <div key={post.guid}>
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      })}
    </div>
  );
};

export default Show;