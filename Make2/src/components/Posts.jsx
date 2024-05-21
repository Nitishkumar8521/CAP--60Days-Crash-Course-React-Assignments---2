import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    {
      /*Complete the missing code*/
      setLoading(true);
    }
    try {
      {
        /*Complete the missing code*/
        let res = await axios({
          method:'get',
          url:'https://jsonplaceholder.typicode.com/posts'
        })
        setPosts(res?.data);
        setLoading(false);
      }
    } catch (error) {
      {
        /*Complete the missing code*/
        setError(true);
        setLoading(false);
      }
    }
  }

  // useEffect(/*Complete the missing code*/);
  useEffect(()=>{
    fetchAndUpdateData();
  },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post)=>
      <Post {...post} key={post.id}/>)}
      {/*Complete the missing code*/}
    </div>
  );
}

export default Posts;
