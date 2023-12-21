

const ProductDetails = ({ product }) => {
    return (
        <>
            <h2 className="main__right-product-header">{product.name}</h2>
            <p className="main__right-product-description">{product.description}</p>
            <p className="main__right-product-price">{product.price}</p>
            <p>Your size: <b>S</b></p>
            <p>Colour: <b>{product.color ?? ''}</b></p>
            <div className="main__right-size-list">
                <div className="main__right-size-list-item">
                    XXS
                </div>
                <div className="main__right-size-list-item">
                    XS
                </div>
                <div className="main__right-size-list-item main__right-size-list-item--selected">
                    S
                </div>
                <div className="main__right-size-list-item">
                    M
                </div>
                <div className="main__right-size-list-item">
                    L
                </div>
                <div className="main__right-size-list-item">
                    XL
                </div>
                <div className="main__right-size-list-item">
                    XLL
                </div>
            </div>
            <button className="main__right-buy-button">Add to Cart</button>

            <p>FREE SHIPPING / FREE RETURNS</p>
            <p>BUY ONLINE. PICK UP AT A STORE.</p>
            <p>Arc'teryx Vancouver‑ Low Stock</p>
        </>
    )
}

export default ProductDetails;