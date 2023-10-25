import { useState,useEffect } from "react";

function StudentForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollNo,setRollNo] = useState(props.rollNoValue);

    const arr = [name,email,rollNo];  //arr= [KMS,kms@gmail.com,9999]

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue])
    const handleClick = () => {
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} className="form-control my-3" placeholder="Enter your name" required/>
            <input type="email" defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email" required/>
            <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} className="form-control my-3" placeholder="Enter your roll number" required/>
            <button onClick={handleClick} className="btn btn-success d-block mx-auto my-3" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;
