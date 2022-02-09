import styles from './product-details.module.scss';
import {useLocation} from "react-router-dom";

function ProductDetails()  {

    const {state} = useLocation();
    const { productDetails } = state;

    return (
        <div>{productDetails.id}</div>
    );

}

export default ProductDetails;
