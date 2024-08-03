import { useSelector } from 'react-redux';

function Cart() {
  const { cart } = useSelector((store) => store.user.user);
  console.log(cart);
  //   const {cart} = user
  return (
    <div>
      <table>
        <thead>
          <th>product</th>
          <th>price</th>
          <th>quentity</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Cart;
