import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  addToFav,
  removeFromFav,
} from '../../Authentication/userSlice';

const fakeMenu = [
  {
    id: 1,
    category: 'burger',
    plates: [
      {
        id: 100,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 10.99,
        discount: 2,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 101,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 102,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 103,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 104,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 105,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 106,
        img: '/menuImg1.png',
        name: 'Burger',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
    ],
  },
  {
    id: 2,
    category: 'pizza',
    plates: [
      {
        id: 107,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 10.99,
        discount: 2,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 108,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 109,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 110,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 111,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 112,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 113,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
    ],
  },
  {
    id: 3,
    category: 'steak',
    plates: [],
  },
  {
    id: 4,
    category: 'fried checken',
    plates: [],
  },
  {
    id: 5,
    category: 'grilled cheken',
    plates: [],
  },
];
function Menu() {
  const menu = fakeMenu;
  const [currentCat, setCurrentCat] = useState(1);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const currentCategory = menu.find((cat) => cat.id === currentCat);

  function handleAddToCart(plat) {
    const cartItem = {
      id: plat.id,
      name: plat.name,
      img: plat.img,
      price: plat.price,
      discount: plat.discount,
      quantity: 1,
      ingredient: plat.ingredient,
    };
    dispatch(addToCart(cartItem));
  }
  function handleToggleFavorite(plat) {
    const isFavorite = user?.favourites.some((fav) => fav.id === plat.id);
    if (isFavorite) {
      dispatch(removeFromFav(plat.id));
    } else {
      dispatch(addToFav(plat));
    }
  }

  return (
    <div>
      {menu.map((cat) => (
        <button key={cat.id} onClick={() => setCurrentCat(cat.id)}>
          {cat.category}
        </button>
      ))}
      <ul>
        {currentCategory?.plates.map((plat) => (
          <li key={plat.id}>
            <div>
              <img src={plat.img} alt={plat.name} />
            </div>
            <div>
              <span>{plat.name}</span>
              <ul>
                {plat.ingredient.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
            <div>
              <span>{plat.price - plat.discount}</span>
              <span>{plat.price}</span>
            </div>
            <div>
              <button onClick={() => handleToggleFavorite(plat)}>
                {user?.favourites.some((fav) => fav.id === plat.id)
                  ? 'remove from fav'
                  : 'add to fav'}
              </button>
            </div>
            <div>
              <button>order now</button>
              <button onClick={() => handleAddToCart(plat)}>add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
