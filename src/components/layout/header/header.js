import styles from './header.module.scss';

function Header() {

    return (
        <nav className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a className={styles.title} href="/">GL</a>
                <div className={styles.linksContainer}>
                    <a className={styles.link} href="/">PRODUCTS</a>
                    <div className={styles.cartContainer}>
                        <a className={styles.link} href="/">CART</a>
                        {/*<div className="cartCounter">3</div>*/}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
