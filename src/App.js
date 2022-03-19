import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Components/Menubar/Menubar";
import Allproducts from "./Components/Allproducts/Allproducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);   //setCount er man 1 barabe
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      {/* <h1 className='ms-3 p-3 text-danger'>0</h1> */}
      {/* <Menubar country={"uganda"}></Menubar> */}
      <Menubar count={count}></Menubar>
      <Allproducts setCartCount={setCartCount}></Allproducts>
      {/* <Test countMe={count}></Test> */}

     
    </div>
  );
}

export default App;
