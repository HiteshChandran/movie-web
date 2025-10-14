import React from "react";  
import "./App.scss";
import Hitesh from "./assets/hiteshc.jpg";



function App() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo"><h1>Hitesh Chandran</h1></div>
          
          <div className="right">

           <label htmlFor="check" className="checked">
               <i className="fa-solid fa-bars"></i>
            </label>
              <input type="checkbox" id="check"/>


              <ul className="list">
                <li><a href="">Home</a></li>
                <li><a href="">Skill</a></li>
                <li className="but"><a href="">Full screen</a></li>
                <li className="but"><button onClick={}>dark</button></li>
                <li className="but"><button>light</button></li>
              </ul>

               
          </div>
        </nav>

       <div className="container">
         <div className="left">
          
      <h1>Hello, I'm <span>Hitesh Chandran</span></h1>
      <h2 className="typing">Front-end Developer..... </h2> <br />
  
      <p> I hope your doing well !</p>

      <div className="buttons">
        <a href="" className="rightbutton">Hire me</a>
      <a href="" className="leftbutton">Resume <i class="fa-solid fa-download"></i></a> <br />
      </div>

      <div className="social">
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>

    </div>
    <div className="rightt">
          <img src={Hitesh} alt="" />
    </div>
       </div>


       <div className="section2">
        

        <div className="skills">
          <h1> My skills</h1> 
        <p> Here are my skills</p> <br />

         <div className="skill"> <label htmlFor="html"><i class="fa-brands fa-html5"></i>Html</label>
        <input type="range" min={0} max={100} value={80}  /> <br />
</div>
        <div className="skill"><label htmlFor="css"><i class="fa-brands fa-css3-alt"></i>Css</label>
        <input type="range" min={0} max={100} value={70} /> <br /></div>

       <div className="skill"> <label htmlFor="js"><i class="fa-brands fa-js"></i>JavaScript</label>
        <input type="range" min={0} max={100} value={60} /> <br /></div>

        <div className="skill"><label htmlFor="react"><i class="fa-brands fa-react"></i>React</label>
        <input type="range" min={0} max={100} value={50} /> <br />
</div>
        <div className="skill"><label htmlFor="node"><i class="fa-brands fa-node-js"></i>Node</label>
        <input type="range" min={0} max={100} value={40} /> <br /></div>
       </div>
       <div className="box">
          <div className="box1"><i class="fa-brands fa-react"><br /><h1>React</h1></i></div>
          <div className="box2"><i class="fa-brands fa-node-js"><br /><h1>Node JS</h1></i></div>
       </div>
        </div>


      </div>
    );
}

export default App;
