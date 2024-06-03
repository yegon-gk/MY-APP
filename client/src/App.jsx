import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';

function App() {
  return (
    <div className="">
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
