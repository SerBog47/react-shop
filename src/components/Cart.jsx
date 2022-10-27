function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div
            className="cart indigo darken-1 white-text"
            onClick={() => handleBasketShow()}
        >
            <i className="material-icons cart-icon">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
