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
  
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://rest.bandsintown.com/artists/id_15582051?app_id=043b077012de58b4db8fa0f530cd607e");
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    console.log("Fetching data...", data);

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>
  if (error) return <p>Error: Fetched but not fetched {error.message}</p>

  return (
    <div>
      <h1>Record Details</h1>
      {data && (
        <>
          <h2>{data.name}</h2>
          <p>{data.url}</p>
          {/* <p>{data.artist_id}</p> */}
          {/* <p>{data.name}</p> */}
          {/* <p>{data.datetime}</p> */}
          {/* <p>{data.venue}</p> */}
        </>
      )}
    </div>
  );
};

export default Show;