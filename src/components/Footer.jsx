import React from "react";

function Footer(){
    const d=new Date();
let year=d.getFullYear();
    return (<footer>
    <p>Made by Naman ©{year}</p>
    </footer>);
}

export default Footer;