import React from "react";

let currentDate = new Date();

let currentYear = currentDate.getFullYear();

function Footer(){
    return(
        <footer>
        <p>Copyrights - {currentYear}</p>
        </footer>
    );
}

export default Footer;