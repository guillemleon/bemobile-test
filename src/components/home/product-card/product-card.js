import styles from './product-card.module.scss';
import {get} from "../../../global/functions/apiKIT";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

    const navigate = useNavigate();

    return (
        <a target={"_self"} onClick={() => getProductData(product.id)} className={styles.productElement} key={product.id}>
            <div className={styles.cardBackgroundImage} style={{backgroundImage: `url(${product.imgUrl})`}}></div>
            <div className={styles.opacityLayer}>
                <div className={styles.seeDetailsCircle}>SEE DETAILS</div>
            </div>
            <label className={styles.cardLabel}>
                {product.brand}
                <p className={styles.productModel}>{product.model}</p>
            </label>
        </a>
    );

    function getProductData(productId) {
        console.log(productId);
        get(`/api/product/${productId}`, (res) => {
            navigate('/product/' + productId, {
                state: {
                    productDetails: res.data
                }
            })
        })
    }
}

export default ProductCard;
