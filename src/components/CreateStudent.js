import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const[arr,setArr] = useState([]); //arr = [sri,kms@gmail.com,9992]

    const getState = (childData) => { //childData = [sri,kms@gmail.com,9992]
        setArr(childData); 
    }
    const handleSubmit = () => {
        const data = {name: arr[0],email: arr[1],rollNo: arr[2]}
        Axios.post("https://demo-project-b90s.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
               alert("record added successfully");
            else
               Promise.reject();
        })
    }
    return (
		<form onSubmit={handleSubmit}>
			<StudentForm getState= {getState} nameValue="" emailValue="" rollNoValue="" >
                CREATE
            </StudentForm>
		</form>
    );
}

export default CreateStudent;