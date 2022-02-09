import styles from './product-details.module.scss';
import {useLocation} from "react-router-dom";
import Layout from "../../components/layout/layout";
import {useEffect, useState} from "react";
import { post } from "../../global/functions/apiKIT";
import {logDOM} from "@testing-library/react";

function ProductDetails() {

    const {state} = useLocation();
    const {productDetails} = state;
    const [productBodyToSend, setProductBodyToSend] = useState({
        id: productDetails.id,
        colorCode: "0",
        storageCode: "0"
    });

    return (
        <Layout>
            <h1 className={styles.modelTitle}>{productDetails.model.toUpperCase()}</h1>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div
                        className={styles.image}
                        style={{backgroundImage: `url(${productDetails.imgUrl})`}}
                        alt=""
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h4 className={styles.descriptionTitle}>Description</h4>
                    <ul className={styles.featureList}>
                        <li><p className={styles.feature}><b>Brand:</b> {productDetails.brand}</p></li>
                        <li><p className={styles.feature}><b>Model:</b> {productDetails.model}</p></li>
                        <li><p className={styles.feature}><b>Price:</b> {productDetails.price} €</p></li>
                        <li><p className={styles.feature}><b>CPU:</b> {productDetails.cpu}</p></li>
                        <li><p className={styles.feature}><b>RAM:</b> {productDetails.ram}</p></li>
                        <li><p className={styles.feature}><b>Operative System:</b> {productDetails.os}</p></li>
                        <li><p className={styles.feature}><b>Resolution:</b> {productDetails.displayResolution}</p></li>
                        <li><p className={styles.feature}><b>Battery:</b> {productDetails.battery}</p></li>
                        <li>
                            <div>
                                <b>Cameras:</b>
                                <ul className={styles.cameraOptions}>
                                    Primary camera:
                                    {(
                                        productDetails.primaryCamera &&
                                        typeof productDetails.primaryCamera !== "string" &&
                                        productDetails.primaryCamera.map((item, index) => {
                                            return (
                                                <div>{item} {index !== productDetails.primaryCamera.length - 1 && "/"}</div>
                                            )
                                        })) || (productDetails.primaryCamera && (
                                        <div>{productDetails.primaryCamera}</div>
                                    ))}
                                </ul>
                                {productDetails.secondaryCmera && (
                                    <ul>
                                        Secondary camera: {productDetails.secondaryCmera}
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li><p className={styles.feature}><b>Dimensions:</b> {productDetails.dimentions}</p></li>
                        <li><p className={styles.feature}><b>Weight:</b> {productDetails.weight} g</p></li>
                    </ul>
                    <h4 className={styles.descriptionTitle}>Colors</h4>
                    {productDetails.colors && (
                        <ul className={styles.actionsList}>
                            {renderColors(productDetails.colors)}
                        </ul>
                    )}
                    <h4 className={styles.descriptionTitle}>Storage</h4>
                    {productDetails.internalMemory && (
                        <ul className={styles.actionsList}>
                            {renderStorage(productDetails.internalMemory)}
                        </ul>
                    )}
                    <button
                        className={styles.addToCartButton}
                        onClick={() => addToCart()}
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </Layout>
    );

    function renderColors(colors) {

        let checkIfIsSelected = (key) => {
            if (productBodyToSend.colorCode.toString() === key) return true;
            return false;
        }

        return Object.entries(colors).map(([key, value]) => (
            <button
                className={checkIfIsSelected(key) ? styles.colorSelected : styles.color}
                style={{backgroundColor: value}}
                onClick={() => selectColor(key)}
            />
        ))
    }

    function selectColor(key) {
        let productBodyToSendCopy = {...productBodyToSend};
        productBodyToSendCopy.colorCode = key;
        setProductBodyToSend(productBodyToSendCopy);
    }

    function renderStorage(storage) {
        let checkIfIsSelected = (key) => {
            if (productBodyToSend.storageCode.toString() === key) return true;
            return false;
        }

        return Object.entries(storage).map(([key, value]) => (
            <button
                className={checkIfIsSelected(key) ? styles.storageSelected : styles.storage}
                onClick={() => selectStorage(key)}
            >
                {value}
            </button>
        ))
    }

    function selectStorage(key) {
        let productBodyToSendCopy = {...productBodyToSend};
        productBodyToSendCopy.storageCode = key;
        setProductBodyToSend(productBodyToSendCopy);
    }

    function addToCart() {
        post("/api/cart", productBodyToSend, (res) => {
            const exist =  JSON.parse(localStorage.getItem('productsCount'));
            if(exist) {
                let newCount = exist + res.data.count;
                localStorage.setItem("productsCount", JSON.stringify(newCount))
            } else {
                localStorage.setItem("productsCount", JSON.stringify(res))
            }
        })
    }
}

export default ProductDetails;
