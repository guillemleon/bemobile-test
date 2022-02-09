import styles from './layout.module.scss';
import Header from "./header/header";

function Layout({ children }) {

    return (
        <div className={styles.layoutContainer}>
            <Header />
            <main className={styles.layoutContent}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
