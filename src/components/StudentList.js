import Axios from "axios";
import {useEffect, useState} from "react";
import StudentListRow from "./StudentListRow";

function StudentList()
{
    const  [arr,setArr] = useState([]);

    useEffect(()=>{
        Axios.get("https://demo-project-b90s.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data)
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])

    const ListItems = () => {
        return arr.map((val,ind)=>{  //arr=[{_id,name,email,rollNo},{},{},{},...]
            return <StudentListRow key={val._id} obj={val} />
        })
    }
    return (
        <div>
        <div className="text-center text-light bg-dark">Student details</div>
        <table className="table table-striped table-bordered table-info">
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Roll Number</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </div>
    )
}

export default StudentList;