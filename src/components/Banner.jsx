import React from "react";
import '../global.css'

function Bunner() {
    return(
    <div className="Banner">
        <div className="Banner-text">
            <h1 >Hey, I'm Bishaar,</h1>
            <h2>A web Developer</h2>
            <p>Transforming Your Digital Vision into Reality;  Innovative Web Design by a <br /> perfessional Web developer</p>
            <p>Transforming Your Digital Vision into Reality; <br /> Innovative Web Design by a perfessional Web developer</p>
            <button className="btn-banner">More About Me</button>
        </div>
        <div className="profile-section">
            <img className="profile-pic" src="myEmage.jpg" alt="" />
            {/* <div className="badge badge-webflow"> Webflow Developer</div> */}
            {/* <div className="badge badge-design">Web Designer</div> */}
        </div>

    </div>
    )
}
export default Bunner