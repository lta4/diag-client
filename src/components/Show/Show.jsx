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
  const [items, setItems] = useState([]);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch("https://rest.bandsintown.com/artists/Diagnostic/events?app_id=043b077012de58b4db8fa0f530cd607e&date=all");
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    console.log("Fetching items...", items);

    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading data...</p>
  }

  if (error) {
    return <p>Error: Fetched but not fetched {error.message}</p>
  }

  return (
    // <div>
    //   <h1>Record Details</h1>
    //   {data && (
    //     <>
    //       <p>{data.artist_id}</p>
    //       <p>{data.name}</p>
    //       <p>{data.datetime}</p>
    //       <p>{data.venue}</p>
    //     </>
    //   )}
    // </div>

    <div>
      <h1>Record Details</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.artist_id}</h2> ({item.id})
            <h2>{item.datetime}</h2> ({item.id})
            <h2>{item.title}</h2>
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Show;