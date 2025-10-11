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

function Show() {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://rest.bandsintown.com/artists/Diagnostic/events/?app_id=1628751");
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }

        const data = await response.json();
        setItems(Array.isArray(data) ? data : []);
        console.log('Fetched data:', data, 'Set items as array:', Array.isArray(data) ? data : []);

      } catch (error) {
        setError(error);
        
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading data...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>Record Details</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : Array.isArray(items) && items.length > 0 ? (
        <ul>
          {items.map(data => (
            <li key={data.id || data.datetime}>
              <p>{data.venue && data.venue.name}</p>
              <p>{data.datetime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default Show;