import { useNavigate } from "react-router-dom";
export function Author({ item }) {
    const navigate = useNavigate();
    return (
        <div class="card text-center mx-5 my-3">
            <div class="card-header">
                {item.id}
            </div>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <button class="btn btn-success" onClick={
                    () => {
                        navigate(`/author/${item.id}`)
                    }}>
                    Show Details</button>
            </div>
        </div>


    )
}