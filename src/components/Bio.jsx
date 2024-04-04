import React from "react";
import '../global.css'
function Bio() {
    return(
      <div id="Bio" className="bio-container">
            
        <img className="img" src="IMG.jpg" />
        <h1>About Me</h1>
      
      
        <p>
          Hello! I'm Alex, a dedicated and enthusiastic Computer Science student at the
          University of Technology. <br />The thrill of bringing code
          to life and solving complex problems had me hooked from day one. <br />I've since dedicated
          myself to mastering the craft, focusing on languages like JavaScript, Python, and<br />
          frameworks such as React and Node.js.
          {/* Beyond the classroom, I immerse myself in the vibrant tech community through
          hackathons, meetups, and contributing to open source projects. My interests are not
          limited to the digital realm; I am also an avid rock climber and a curious traveler,
          seeking new experiences that push my limits. These adventures have taught me valuable
          lessons in persistence and the importance of a fresh perspective—qualities that I
          bring to every line of code I write.
          As I continue my academic journey, I am eager to apply my knowledge in a real-world
          setting through internships and collaborative projects. I am passionate about using
          technology to make a positive impact and am excited about the opportunities to
          innovate and grow as part of a dynamic team. Coding for me is more than a skill; it's
          a way to create, connect, and contribute to the world around me. */}
        </p>
      
        <div>
          <a href="" class="hero-btn red-btn">About Me</a>
          <a href="" class="hero-btn red-btn">Contect Me</a>
        </div>
    </div>
    
    )
}

export default Bio