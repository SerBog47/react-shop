import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.cost * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list z-depth-5">
            <li className="collection-item active">
                Корзина{' '}
                <i
                    class="material-icons right basket-close"
                    onClick={handleBasketShow}
                >
                    close
                </i>
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб.
            </li>
        </ul>
    );
}

export { BasketList };
