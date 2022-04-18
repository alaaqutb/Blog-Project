import { useNavigate } from "react-router-dom";
export function Post({ post }) {
    const navigate = useNavigate()
    return (
        <div>
            <div class="card text-center mx-5 my-3">
                <div class="card-header">
                    {post.title}
                </div>
                <div class="card-body">
                    <p>{post.body}</p>
                    <button class="btn btn-success" onClick={
                        () => {
                            navigate(`/posts/${post.id}`)
                        }}>
                        Show Details</button>
                </div>
            </div>
        </div>
    )

}