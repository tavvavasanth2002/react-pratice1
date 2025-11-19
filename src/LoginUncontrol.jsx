import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginUncontrol(){
    var navigate=useNavigate()
    var userName=useRef()
    var pwd=useRef()
    var checkLogin=(e)=>{
        e.preventDefault()
        console.log(userName.current.value,pwd.current.value)
        navigate("/nav/view")
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={checkLogin}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">UserName:</label>
                            <input type="text" className="form-control" ref={userName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">password:</label>
                            <input type="password" className="form-control" ref={pwd} />
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