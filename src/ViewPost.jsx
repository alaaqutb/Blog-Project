import { useParams } from "react-router-dom"
import { usePost } from "./hooks/usePost";
import { useNavigate } from "react-router-dom";


export function ViewPost() {
  const { postId } = useParams();
  const post = usePost(postId);
  const navigate = useNavigate()

  return (
    <>
      {post && (
        <div class="card text-center mx-5 my-3">
          <div class="card-header">
            Post Details
          </div>
          <div class="card-body">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button class="btn btn-success" onClick={
              () => {
                navigate(`/posts/${postId}/comments`)
              }}>
              Show Comments</button>
          </div>
        </div>
      )}



    </>
  )
}