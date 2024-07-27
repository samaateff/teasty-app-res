import { useSelector } from 'react-redux';
import { useState } from 'react';

import BellIcon from './icons/BellIcon';
import TrashIcon from './icons/TrashIcon';

// import styles from './navbar.module.css';
import styles from './cartl.module.scss';

function NotifactionNav() {
  const { user } = useSelector((store) => store.user);
  const [droped, setDroped] = useState(false);
  const notificationsLength = user.notifications.length;
  return (
    <div
      className={`${styles.cartIcons}`}
      onMouseEnter={() => setDroped(true)}
      onMouseLeave={() => setDroped(false)}
    >
      <BellIcon />
      {notificationsLength > 0 ? (
        <span className={styles.dot}>
          <sup></sup>
        </span>
      ) : null}
      {droped && (
        <div className={styles.cartMenu}>
          <ul>
            {notificationsLength > 0 ? (
              <>
                {user.notifications.map((item) => (
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
              <div>no notification</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NotifactionNav;
