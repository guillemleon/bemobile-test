import styles from './product-card.module.scss';

function ProductCard({ product }) {

    return (
        <div className={styles.productElement} key={product.id}>
            <div className={styles.cardBackgroundImage} style={{backgroundImage: `url(${product.imgUrl})`}}></div>
            <div className={styles.overlayer} />
            <div className={styles.seeDetailsCircle}>SEE DETAILS</div>
            <label className={styles.cardLabel}>
                {product.brand}
                <p className={styles.productModel}>{product.model}</p>
            </label>
        </div>
    );
}

export default ProductCard;
