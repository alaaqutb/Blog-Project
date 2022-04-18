import { useParams } from "react-router-dom"
import { useComment } from "./hooks/useComment";


export function ViewComment() {
  const { postId } = useParams();
  const comments = useComment(postId);

  return (
    <div className="mt-5">
      {comments && (
        comments.map((post) => (
          <div class="card text-center mx-5 my-3">
            <div class="card-header">
              Comment: {post.id}
            </div>
            <div class="card-body">
              <h3 class="card-title">{post.name}</h3>
              <h5>By: {post.email}</h5>
            </div>
          </div>
        )))}
    </div>
  )
}
