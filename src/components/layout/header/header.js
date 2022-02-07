import './header.css';

function Header() {

    return (
        <nav className="headerContainer">
            <div className="headerContent">
                <a className="title" href="/">GL</a>
                <div className="linksContainer">
                    <a className="link" href="/">PRODUCTS</a>
                    <div className="cartContainer">
                        <a className="link" href="/">CART</a>
                        {/*<div className="cartCounter">3</div>*/}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
