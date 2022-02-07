import './App.css';
import {useEffect, useState} from "react";
import {get} from "./global/functions/apiKIT";
import Layout from "./components/layout/layout";
import SearchBar from "./components/search/search-bar";
import ProductCard from "./components/home/product-card/product-card";

function App() {

  useEffect(() => {
    get('/api/product', (res) => {
      localStorage.setItem("products", JSON.stringify(res))
    })
  },[])

  const products = JSON.parse(localStorage.getItem('products'));
  const [searchResult, setSearchResult] = useState(products.data);

  const example = {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
  }

  return (
    <Layout products={products}>
      <SearchBar allProducts={products} setSearchResult={filterProducts} />
      <h1 className="productsTitle">PRODUCTS</h1>
      <div className="productsListContainer">
        {searchResult.map((i) => {
          return (
              <ProductCard product={i} />
          )
        })}
      </div>
    </Layout>
  );

  function renderProduct(prods) {
    console.log(prods)
    for (let i = 0; i <= prods.length - 1; i++) {
      return (
          <ProductCard product={prods[i]}/>
      )
    }
  }
  function filterProducts(value) {
    setSearchResult(value)
  }
}

export default App;
