import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="navbar navbar-expand-md navbar-dark bg-dark text-white d-flex justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item px-4"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/count">Real</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/realcounter">defeat</Link></li>
            </ul>
        </div>
        </>
    )
}
export default Navbar;
