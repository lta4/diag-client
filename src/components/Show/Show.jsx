import React, { useEffect, useState } from "react";
import axios from "axios";

// const Show = () => {

//   const [posts, setPosts] = useState([]);
//   const getPostData = () => {
//     axios
//       .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrew4ld")
//       .then((res) => {
//         setPosts(res.data.items);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog posts:", error);
//       });
//   };

//   useEffect(() => {
//     getPostData();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => {
//         <div key={post.guid}>
//           <h2>{post.title}</h2>
//           <p dangerouslySetInnerHTML={{ __html: post.content }} />
//           <a href={post.link} target="_blank" rel="noopener noreferrer">
//             Read More
//           </a>
//         </div>
//       })}
//     </div>
//   );
// };

// export default Show;

const Show = () => {

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://rest.bandsintown.com/artists/DIAGNOSTIC?app_id=043b077012de58b4db8fa0f530cd607e")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    };
    fetchLocation();
  }, []);

  if(!data.length) return <div>Loading...</div>

  return (
    <div className="show">
      Name: {data[0].name}
      <br />
      {/* Email: {data[0].email}
      <br />
      Phone: {data[0].body}
      <br />
      Address: {data[0].address.street} */}
    </div>
  );
};

export default Show;