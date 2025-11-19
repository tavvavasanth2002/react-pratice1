import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginControl(){
    var navigate=useNavigate();
    var [userName,setUserName]=useState("")
    var [pwd,setPwd]=useState("")
    var checkLogin=(e)=>{
        e.preventDefault();
        if(pwd==userName.slice(0,3)+"@123")
        {
            alert("login Success")
            navigate("/nav/home")
        }
        else{
            alert("check username or password")
        }
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={checkLogin}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">UserName:</label>
                            <input type="text" className="form-control" onChange={(e)=>(setUserName(e.target.value))} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">password:</label>
                            <input type="password" className="form-control" onChange={(e)=>(setPwd(e.target.value))} />
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <button type="submit" className="btn btn-lg bg-primary text-white px-2">Login</button>
                            <button type="Reset" className="btn btn-lg bg-danger text-white px-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}