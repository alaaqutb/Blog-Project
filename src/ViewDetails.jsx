import { useParams } from "react-router-dom"
import { useDetails } from "./hooks/useDetails";
import { useNavigate } from "react-router-dom";

export function ViewDetails() {
  const { authorid } = useParams();
  const author = useDetails(authorid);
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="mx-5 my-4 text-center">User Details</h1>


      {author && (
        <div className="text-center mt-3">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Username</th>
                <td>{author.username}</td>
              </tr>
              <tr>
                <th scope="row">ID</th>
                <td>{authorid}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{author.email}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td colspan="2">{author.address.city}, {author.address.street}</td>
              </tr>
              <tr>
                <th scope="row">Zip Code</th>
                <td>{author.address.zipcode}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn-success"
            onClick={
              () => {
                navigate(`/posts`)
              }
            }
          >ViewPosts</button>
        </div>
      )}
    </div>
  )
}