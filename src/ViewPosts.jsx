import { usePosts } from "./hooks/usePosts";
import { Post } from "./component/Post";


export function ViewPosts() {

  const posts = usePosts();

  return (
    <div className="text-center my-3">
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}