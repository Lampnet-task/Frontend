import './Product.css';

function OrderCart() {
  return (
    <>
      <div className="order-cart relative text-white">
        <p className='my-4'>You have 3 items in your cart</p>
        <div className="order-card rounded-lg">
          <div className="order-item my-6 py-3 px-2">
            <div className="order-image w-3/4">
              <img src="https://img-global.cpcdn.com/recipes/d2d38dd16f4ad79d/680x482cq70/porridge-beans-and-fried-plantain-recipe-main-photo.webp" alt="" className="object-cover rounded-lg" />
            </div>
            <div className="order-details flex justify-between items-center gap-3">
              <h3 className="order-title font-bold">Fried Plantain with grilled fish</h3>
              <div className="order-btn flex">
                <button className="add bg-green-500 rounded-l-md">+</button>
                <button className="number bg-orange-50 text-black">2</button>
                <button className="minus bg-green-500 rounded-r-md">-</button>
              </div>
              <p className="order-price">&#x20A6;1200</p>
              <button className="remove bg-red-400 rounded-lg">X</button>
            </div>
          </div>

          <div className="total-area relative">
            <div className="cart-total flex justify-between items-center bg-black px-2 py-4 rounded-lg">
              <p>Total</p>
              <p>&#x20A6;1200</p>
            <button className='bg-blue-700 p-2 rounded-l-lg'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCart;
