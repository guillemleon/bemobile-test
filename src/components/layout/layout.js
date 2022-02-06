import './layout.css';

function Layout({ children }) {

    return (
        <div className="layoutContainer">
            <main className="layoutContent">
                {children}
            </main>
        </div>
    );
}

export default Layout;
