import { useSelector } from 'react-redux';
import { useState } from 'react';

import CartIcon from './icons/CartIcon';
import TrashIcon from './icons/TrashIcon';

// import styles from './navbar.module.css';
import styles from './cartl.module.scss';
import { useNavigate } from 'react-router-dom';

function CartNav() {
  const { user } = useSelector((store) => store.user);
  const [droped, setDroped] = useState(false);
  const cartLength = user.cart.cartItems.length;
  const navigate = useNavigate();
  console.log(user.cart.cartItems);
  return (
    <div
      className={`${styles.cartIcons}`}
      onMouseEnter={() => setDroped(true)}
      onMouseLeave={() => setDroped(false)}
    >
      <CartIcon />
      {cartLength > 0 ? (
        <span className={styles.cartNum}>{cartLength}</span>
      ) : null}
      {droped && (
        <div className={styles.cartMenu}>
          <ul>
            {cartLength > 0 ? (
              <>
                {user.cart.cartItems.map((item) => (
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
                  <button onClick={() => navigate('/cart')}>VIEW CART</button>
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
