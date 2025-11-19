import { Link, Outlet } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="navbar navbar-expand-md navbar-dark bg-dark text-white d-flex justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/home">Home</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/defeat">Real</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/counter">defeat</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/view">View</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/uncontrol">uncontrol</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/effect">Effect</Link></li>

            </ul>
        </div>
        <div className="container">
            <Outlet></Outlet>
        </div>
        </>
    )
}
export default Navbar;
