import styles from './home.module.scss';
import {useEffect, useState} from "react";
import {get} from "../../global/functions/apiKIT";
import Layout from "../../components/layout/layout";
import SearchBar from "../../components/search/search-bar";
import ProductCard from "../../components/home/product-card/product-card";

function Home() {

    useEffect(() => {
        get('/api/product', (res) => {
            localStorage.setItem("products", JSON.stringify(res))
        })
    },[])

    const products = JSON.parse(localStorage.getItem('products'));
    const [searchResult, setSearchResult] = useState(products && products.data);

    return (
        <Layout products={products}>
            <SearchBar allProducts={products} setSearchResult={filterProducts} />
            <h1 className={styles.productsTitle}>PRODUCTS</h1>
            <div id="productsList" className={styles.productsListContainer}>
                {searchResult && searchResult.map((i) => {
                    return (
                        <ProductCard product={i} />
                    )
                })}
            </div>
        </Layout>
    );

    function filterProducts(value) {
        setSearchResult(value)
    }
}

export default Home;
