import PostCard from "./PostCard";
import Loading from "../Loading";
import { Suspense, useContext } from "react";
import { PostContext } from '../../context/PostContext';

function PostList() {
  const {posts} = useContext(PostContext);
  console.log(posts)
  return (
    <div className="grid gap-2">
      <Suspense fallback={<Loading/>}>
      {posts.data.map((post) => (<PostCard key={post.entry.mal_id} post={post} />))}
      </Suspense>
      
    </div>
  );
}

export default PostList;
