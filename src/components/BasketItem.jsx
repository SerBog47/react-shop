function BasketItem(props) {
    const {
        mainId,
        displayName,
        cost,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {displayName} x{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>{' '}
            {quantity}
            <i
                className="material-icons basket-quantity"
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>{' '}
            = {cost * quantity} руб.
            <span className="secondary-content">
                <i
                    className="material-icons basket-delete"
                    onClick={() => removeFromBasket(mainId)}
                >
                    delete
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
