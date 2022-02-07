import './product-card.css';

function ProductCard({ product }) {

    return (
        <div
            className="productElement" key={product.id}
        >
            <div className="cardBackgroundImage" style={{backgroundImage: `url(${product.imgUrl})`}}></div>
            <div className="overlayer" />
            <div className="seeDetailsCircle">SEE DETAILS</div>
            <label className="cardLabel">
                {product.brand}
                <p className="productModel">{product.model}</p>
            </label>
        </div>
    );
}

export default ProductCard;
