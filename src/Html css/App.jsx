import React from 'react';
import Homeimg  from './assets/Homeimg.jpeg'
import Videoabout from './assets/Videoabout.mp4'
import Image1 from './assets/Image1.jpeg'
import Image2 from './assets/Image2.jpeg'
import Image3 from './assets/Image3.jpeg'
import Image4 from './assets/Image4.jpeg'

function App() {
  return (
  <React.Fragment>
  <div>
    <center><a href="">     Home       </a>
    <a href="">     About      </a>
    <a href="">     Gallery     </a>
    <a href="">     Contact     </a>  </center>
  </div>


    <div>
      <center>
        <h1>Home</h1>
      <img src={Homeimg} alt="" />
      </center>
    </div>

    <div>
      <center>
        <h1>About</h1>
      <video src={Videoabout}  autoPlay loop muted></video>
      </center>

      <center> <p><b>🕷️ Spider-Man (Peter Parker)</b>

Peter Parker is a brilliant high-school graduate who gained spider-like abilities after being bitten by a genetically modified spider. As Spider-Man, he uses his strength, agility, wall-crawling, and web-shooting skills to fight crime and protect New York City. In The Amazing Spider-Man 2, Peter struggles to balance his double life as a hero and a young man in love. He faces new enemies like Electro and the Green Goblin while trying to keep his promise to protect Gwen Stacy, which ultimately leads to a heartbreaking tragedy.

<b>💙 Gwen Stacy </b>

Gwen Stacy is Peter Parker’s first true love and one of the brightest students in her class. She’s intelligent, ambitious, and supportive of Peter, often acting as his emotional anchor. In The Amazing Spider-Man 2, Gwen dreams of studying science in England, but her love for Peter keeps her close. Despite the dangers of his superhero life, she insists on helping him. Gwen’s tragic fall during a battle with the Green Goblin becomes one of the most defining and emotional moments in Spider-Man’s story.</p></center>

<iframe width="100%" height="415" src="https://www.youtube.com/embed/UGjlrq67Eh8?si=6ns2rhyo4yxXRpxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
 
    </div>
    <br />
    <center><h1>Gallery</h1></center>
    <center> <table>
      <thead></thead>
      <tbody>
        <td><img src={Image1} alt=""  height={"300px"} width={"250px"}/></td> <br />
        <td><img src={Image2} alt=""  height={"300px"} width={"250px"}/></td> <br />
        <td><img src={Image3} alt=""  height={"300px"} width={"250px"}/></td> <br />
        <td><img src={Image4} alt=""  height={"300px"} width={"250px"}/></td> <br />
      </tbody>
      <tfoot></tfoot>
    </table></center>
    



    <center><h1>Contact</h1></center>
   
   <center>
     <table border={1}>
      <thead></thead>
      <tbody>
        <tr>
          <td>Name:</td>
          <td><input type="text" placeholder='Enter your name' /></td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><input type="email" placeholder='Enter your email' /></td>  
        </tr>
        <tr>
          <td>Message:</td>
          <td> <input type="text" placeholder='enter your message'/></td>
        </tr>
        <tr>
          <td><button>Submit</button></td>
        </tr>
         </tbody>
        <tfoot></tfoot>
    </table>
   </center>
    

</React.Fragment>

  )}
export default App;