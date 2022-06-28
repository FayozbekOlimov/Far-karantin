import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import routes from "./Routes";

function App() {
  let element = useRoutes(routes);

  // const [txt, setTxt] = useState<string>('')

  // function getSelectionText() {
  //   let text: any = "";
  //   if (window.getSelection()) {
  //     text = window?.getSelection()?.toString();
  //   }
  //   console.log(text)
  // }

  // useEffect(() => {
  //   getSelectionText()
  // }, [txt, setTxt])

  return (
    <div className="App">
      <Header />
      {element}
      <Footer />
    </div >
  );
}

export default App;
