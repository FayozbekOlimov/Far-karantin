import { useRoutes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import routes from "./Routes";

function App() {
  let element = useRoutes(routes)

  return (
    <div className="App">
      <Header />
      {element}
      <Footer />
    </div >
  );
}

export default App;
