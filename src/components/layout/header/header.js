import styles from './header.module.scss';
import {useEffect, useState} from "react";

function Header() {

    const [productsCount, setProductsCount] = useState(2);

    useEffect(() => {
        let prodCount = JSON.parse(localStorage.getItem('productsCount'))
        if(prodCount) setProductsCount(prodCount);
    })


    return (
        <nav className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a className={styles.title} href="/">GL</a>
                <div className={styles.linksContainer}>
                    <a className={styles.link} href="/">PRODUCTS</a>
                    <div className={styles.cartContainer}>
                        <a className={styles.link} href="/">CART</a>
                        {productsCount > 0 && (
                            <div className={styles.cartCounter}>{productsCount}</div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
