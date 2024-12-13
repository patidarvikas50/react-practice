import React, { useState } from 'react';
import './App.css';
// import Button from './Buttons/Button';
// import Identity from './ID-Card/Identity';
import Header from './Components/Header';
import Products from './Components/Products';
import ProductDiscription from './Components/productDiscription'
import Counter from './Components/Counter'
import TodoList from './Components/TodoList'
import Student from './Components/Student'
import ATMSearch from './Components/ATMSearch/ATMSearch'
import PracticeComponent from './Components/practiceComponent'
import Navbar from "./Components/Navbar"



function App() {
  const [selectProduct, setSelectProduct] = useState(null)
  const handleOnView = (selectedProductDiscription) => {
    setSelectProduct(selectedProductDiscription);
  }

  return (
    < >
      <Header />

      <Navbar/>

    <div >
      <ATMSearch/>
      <PracticeComponent/>
      </div>
      

      <Counter/>
      <TodoList/>
     <Student/>
      <div className="App">
        <div className="products-div"> <Products onView={handleOnView} /></div>
        <div className="product-discription"><ProductDiscription ProductDiscription={selectProduct} /></div>
        
      </div>
    

  


      {/* <Button onClick={handleLoad}>{"  "}
        Small {"  "}</Button>
      <Button size=" medium" onClick={handleLoad}>{"  "}
        Medium {"  "}</Button>
      <Button size="large" onClick={handleLoad}>{" "}
        Large {" "}</Button>
      <Button color="secondary" onClick={handlSubmit}>{" "}
        Submit {" "}</Button>
        <Button color="secondary" varient ="outlined" onClick={handlSubmit}>{" "}
        Outlined {" "}</Button> */}
    </>

  );
}

export default App;
