import React from "react";
import { Link } from "react-router-dom";


export function NavBar(){
    return (
     <>
      <Link to='welcome'>Welcome Page</Link>
        <br></br>
      <Link to='pagenotfound'>PageNotFound Page</Link>
      <br></br>
      <Link to='Goals'>Goals Page</Link>
      <br></br>
      <Link to='Review'>Review Page</Link>
      <br></br>
      </>
    )


}
export default NavBar;