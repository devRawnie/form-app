import React from "react";

function Header(){

    return(
        <div>
            <img onClick={()=>{window.location.reload();}} alt="Logo" src='full_logo.png' width="250px" style={{padding: "20px"}}/>
        </div>
    );
}

export default Header;