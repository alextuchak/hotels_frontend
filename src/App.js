import Footer from './components/footer/footer';
import Parallax from './components/body/parallax';
import Navbar from "./components/header/navbar";
import Section from "./components/body/section"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Parallax image_name="first"></Parallax>
      <Section> </Section>
      <Parallax image_name="second"></Parallax>
      <Footer></Footer>
    </div>
  );
}

export default App;
