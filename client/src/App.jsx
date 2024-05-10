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
    </div>
  );
}

export default App;
