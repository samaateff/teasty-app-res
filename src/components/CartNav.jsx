import { useSelector } from 'react-redux';
import { useState } from 'react';

import CartIcon from './icons/CartIcon';
import TrashIcon from './icons/TrashIcon';

// import styles from './navbar.module.css';
import styles from './cartl.module.scss';

function CartNav() {
  const { user } = useSelector((store) => store.user);
  const [droped, setDroped] = useState(false);
  const cartLength = user.cart.length;
  return (
    <div
      className={`${styles.cartIcons}`}
      onMouseEnter={() => setDroped(true)}
      onMouseLeave={() => setDroped(false)}
    >
      <CartIcon />
      {cartLength > 0 ? (
        <span className={styles.cartNum}>
          <sup>{cartLength}</sup>
        </span>
      ) : null}
      {droped && (
        <div className={styles.cartMenu}>
          <ul>
            {cartLength > 0 ? (
              <>
                {user.cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <div>
                        <img src='/Rectangle157.jpg' />
                      </div>
                      <div className={styles.cartPrice}>
                        <span className={styles.cartPriceName}>
                          {item.name}
                        </span>
                        <span>
                          {item.price}
                          <span className={styles.priceDiscount}>
                            {item.price + item.discount}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <TrashIcon />
                    </div>
                  </li>
                ))}
                <div className={styles.cartBtns}>
                  <button>VIEW CART</button>
                  <button>CHECKOUT</button>
                </div>
              </>
            ) : (
              <div>nothing in the cart</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartNav;
