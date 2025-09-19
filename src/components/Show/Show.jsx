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

// https://rest.bandsintown.com/artists/id_15582051?app_id=043b077012de58b4db8fa0f530cd607e

function Show() {
  
  // const URL = "https://rest.bandsintown.com/artists/Diagnostic/events?app_id=043b077012de58b4db8fa0f530cd607e&date=all";

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://rest.bandsintown.com/artists/Diagnostic/events?app_id=043b077012de58b4db8fa0f530cd607e&date=all")
    .then(res => res.json())
    .then(data => setRecords(data))

    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>{list.id} | {list.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Show;