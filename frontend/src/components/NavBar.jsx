import { Link, useNavigate } from "react-router-dom"; 
 
function Navbar() { 
  const navigate = useNavigate(); 
  const token = localStorage.getItem("token"); 
 
  const handleLogout = () => { 
    localStorage.removeItem("token"); 
    navigate("/login"); 
  }; 
 
  return ( 
    <nav className="navbar navbar-dark bg-dark mb-4 p-3"> 
      <div className="container d-flex justify-content-between"> 
        <Link className="navbar-brand" to="/library">
📚
 Library</Link> 
        <div> 
          {token ? ( 
            <button className="btn btn-outline-light" 
onClick={handleLogout}>Logout</button> 
          ) : ( 
            <> 
              <Link className="btn btn-light me-2" to="/login">Login</Link> 
              <Link className="btn btn-primary" 
to="/signup">Register</Link> 
            </> 
          )} 
        </div>
         </div> 
    </nav> 
  ); 
} 
export default Navbar;