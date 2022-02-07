import './layout.css';
import Header from "./header/header";

function Layout({ children }) {

    return (
        <div className="layoutContainer">
            <Header />
            <main className="layoutContent">
                {children}
            </main>
        </div>
    );
}

export default Layout;
