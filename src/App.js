import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./templates/home/home";
import ProductDetails from "./templates/product-details-page/product-details";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
      </Router>
  )

}

export default App;
