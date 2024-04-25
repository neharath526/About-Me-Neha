import './neha_app.css';
import mypicture from './Components/IMG_1457.jpg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import hearts from './Components/vector-illustration-grunge-brush-hearts-260nw-1758791408-removebg-preview.png';

function App() {
  return (
    <div class = "neha" className="neha-App">
      <header className="neha-App-header">
        <Navbar bg="dark" variant="dark" style={{ backgroundColor: '#9c6644', width: '100%', display: 'flex', flexDirection: 'row'}}>
        <Container style={{display: 'flex', flexDirection: 'row'}}>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <h1 class = "neha-h1">About Me</h1>
        <div class="flex-grid-thirds">
          <div class="col"><img src = {hearts} alt = "heart"/></div>
          <div class="col"><img class = "neha_pic" src={mypicture} alt = "me"/></div>
          <div class="col"><img src = {hearts} alt = "heart"/></div>
        </div>
        <h3 class = "context">My name is Neha Rathnavel and I'm a freshman computer science major. Hope this website gives you a little insight on me!!</h3>
        <div-border>     
        <h2 class="sub-headings">Favorite TV Shows + Movies</h2>
        <div class="flex-grid-fourths">
          <div class = "col-fourths">
            <img class = "new-girl" src="https://i.ibb.co/qNSgfSg/New-Girl-S2.jpg" alt="New Girl!"/>
          </div>
          <div class = "col-fourths">
            <img class = "movies-show" src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg" alt="Now-You-See-Me-2"/>
          </div>
          <div class = "col-fourths">
            <img class = "movies-show" src="https://i.ibb.co/WHLNnP4/p20009391-b-v13-ad.jpg" alt="omitb"/>
          </div>
          <div class = "col-fourths">
            <img class = "movies-show" src="https://i.ibb.co/fCZFx1r/MV5-BMTk0-MDUy-Mz-A1-OF5-BMl5-Ban-Bn-Xk-Ft-ZTgw-Nz-A4-Nz-E1-NTM-V1-QL75-UX190-CR0-0-190-281.jpg" alt = "set it up"/>
          </div>
        </div>
        </div-border>  

        <div-border>     
        <h2 class="sub-headings">Music I'm Listening to Now</h2> 
        <div class="flex-grid-fourths">
          <div class = "col-fourths">
            <img class = "albums" src="https://media.pitchfork.com/photos/5929a4ce13d1975652138dc8/1:1/w_600/a61ee51a.jpg" alt="childish-gambino"/>
          </div>
          <div class = "col-fourths">
            <img class = "albums" src="https://media.pitchfork.com/photos/638902d2e5592afa444298b9/1:1/w_600/SZA-SOS.jpg" alt="sza"/>
          </div>
          <div class = "col-fourths">
            <img class = "albums" src="https://media.pitchfork.com/photos/63cece0fa5957e2471744d13/1:1/w_600/Kali-Uchis-Red-Moon-in-Venus.jpg" alt="kali-uchis"/>
          </div>
          <div class = "col-fourths">
            <img class = "albums" src="https://media.pitchfork.com/photos/638a00f26bff496656dc0b1c/master/w_1280%2Cc_limit/Metro-Boomin.jpg" alt="metro"/>
          </div>
        </div>
        </div-border>

        <div-border>     
        <h2 class="sub-headings">Hobbies</h2> 
        <div class="flex-grid-fourths">
          <div class = "col-fourths">
            <img class = "cooking" src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg" alt="cooking"/>
          </div>
          <div class = "col-fourths">
            <img class = "nail-art" src="https://i.ibb.co/fNFn1z7/IMG-2747.jpg" alt="cooking"/>
          </div>
          <div class = "col-fourths">
            <img class = "cooking" src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/11/WalkingExercise-1341518341-770x533-2.jpg" alt="cooking"/>
          </div>
          <div class = "col-fourths">
            <img class = "coffee" src="https://post.healthline.com/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-732x549.jpg" alt="cooking"/>
          </div>
        </div>
        </div-border>
      </header>
    </div>
  );
}

export default App;
