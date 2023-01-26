// import { Link } from "react-router-dom";
// import logo from "../images/logo.png"
// import bell from '../images/bell.png';
// import user from '../images/user.png';

// const NavBar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#70B9E6" }}>
//             <div className="container-fluid">
//                 <Link class="navbar-brand" to="/">
//                     <img src={logo} width="35" height="35" alt="logo"/>
//                 </Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="/">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Leaderboard</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Guidance</a>
//                         </li>
                        
//                     </ul>
//                     <div className="container-fluid d-grid gap-2 d-md-flex justify-content-md-end">
//                     <img src={bell} width="35" height="35" alt="logo"/>
//                     <img src={user} width="35" height="35" alt="logo"/>
//                     </div>
//                     {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//                     <button class="btn btn-primary me-md-2" type="button">Button</button>
//                     <button class="btn btn-primary" type="button">Button</button>
//                     </div> */}
//                 </div>
//             </div>
//         </nav>
//     );
// }
// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
//import "../css/Nav.css"
const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: "#70B9E6" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <li className="nav-item rounded">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill me-2"></i>Home</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link active" to="#"><i className="bi bi-people-fill me-2"></i>About</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link active" to="#"><i className="bi bi-telephone-fill me-2"></i>Contact</Link>
                            </li>
                            <li className="nav-item dropdown rounded">
                                <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person-fill me-2"></i>Profile</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Account</Link></li>
                                    {/* <li><Link className="dropdown-item" to="#">Another action</Link></li> */}
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="#">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default NavBar;

//navbar-dark bg-dark