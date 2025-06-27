import { useContext, useState } from "react";

function UserOrdersComp() {
  const [count, setCount] = useState(1);
    const [Ordervisible, setOrderVisible] = useState(true);
  

  const handleOrderClose = () => {
    setOrderVisible(false);
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  return (
    <div className="UserOrdersComp">
          {Ordervisible && (
      <div className="Order flex justContentSpaceBet alignItemsCenter">
        <img src="../../G.Project assets2.png (2)/converted-files.png/d104b2c3e-b169-4226-930a-7794de0dde12.jpg" />
        <div className="CartPrice">
          <h3 className="OrderName White">Pizza</h3>
          <h4 className="White"> {count * 200} EGP</h4>
        </div>
        <button className="OrderCounterbtn flex">
          <a onClick={decrement}>-</a>
          <p className="orderNumber"> {count} </p>
          <a onClick={increment}>+</a>
        </button>
        <div className="CancelOrder">
          <a onClick={handleOrderClose}>
            <h2>
              {" "}
              <i className="fa-solid fa-xmark no-hover White mrgn-1"></i>
            </h2>
          </a>
        </div>
      </div>
       )}
    </div>
  );
}
export default UserOrdersComp;
