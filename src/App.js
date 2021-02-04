import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.jpg"
import './style.css';
function App() {
  return (
    <>
  <div align="center" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title-red">Jamli Amel</h1>
    <br />
    <img width={1500} height={800} src={myImage} alt ='myImage' />
    <br />
    <img  width={1500} height={800} src="/imageInPublic.jpg" />
  </div>
  <div align="center">
  <video   width={1400} height={800} controls>
    <source src="Get ready for the future of work!.mp4" type="video/mp4" />
  </video>
  </div>
</>
      );
    }
    export default App ;
