import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
    const { _id, name, email, rollNo } = props.obj; //Object destruction

    const handleClick = () => {
        const confirmed = window.confirm("Are you sure you want to delete this student?");

        if (confirmed) {
            Axios.delete("https://demo-project-b90s.onrender.com/studentRoute/delete-student/" + _id)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Record deleted successfully");
                        window.location.reload();
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err))
        }
        else {
            alert("record deletion unsuccessful");
        }
    }
    return (
        <tr>
            <td className="text-center text-success text-uppercase fw-bolder">{name}</td>
            <td className="text-center text-warning fw-bolder">{email}</td>
            <td className="text-center text-primary fw-bolder">{rollNo}</td>
            <td className="text-center">
                <button class="btn btn-sm btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} className="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;
