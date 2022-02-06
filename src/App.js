import './App.css';
import {useEffect, useState} from "react";
import {get} from "./global/functions/apiKIT";
import Layout from "./components/layout/layout";

function App() {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    get('/api/product', (res) => {
      setProducts(res)
    })
  },[])

  const example = {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
  }

  return (
    <Layout products={products}>
      {renderProduct(products)}
    </Layout>
  );

  function renderProduct(prods) {
    return (
        <div className="productsListContainer">
          {prods && prods.data.map((prod, index) => {
            console.log(prod.imgUrl)
            return (
                <div
                  className="productElement" key={prod.id}
                  style={{backgroundImage: `url(${prod.imgUrl})`}}
                >
                  <div className="overlayer" />
                  <div className="seeDetailsCircle">
                    SEE DETAILS
                  </div>
                </div>
            )
          })
        }
        </div>
    )
  }
}

export default App;
