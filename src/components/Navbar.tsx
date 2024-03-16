import React from "react";
import { Link } from "react-router-dom";


export function NavBar(){
    return (
     <>
      <Link to='welcome'>Welcome Page</Link>
        <br></br>
      <Link to='product'>Product Page</Link>
      <br></br>
      <Link to='pagenotfound'>PageNotFound Page</Link>
      <br></br>
      <Link to='seller'>Seller Page</Link>
      <br></br>
      </>
    )


}
export default NavBar;