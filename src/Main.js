import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Project from './Project';
import Services from './Services';
import Footer from './Footer';

function Main() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Main;
