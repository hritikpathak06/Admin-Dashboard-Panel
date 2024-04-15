import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../@types/orderTypes";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "anjkasdsdssd",
    quantity: 4,
    price: 2000,
  },
  {
    name: "Puma Shoes",
    photo: img,
    _id: "anjkasdsdssd",
    quantity: 4,
    price: 2000,
  },
  {
    name: "Puma Shoes",
    photo: img,
    _id: "anjkasdsdssd",
    quantity: 4,
    price: 2000,
  },
  {
    name: "Puma Shoes",
    photo: img,
    _id: "anjkasdsdssd",
    quantity: 4,
    price: 2000,
  },
];

const ManageTransaction = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Ritik Kumar Pathak",
    address: "77 Black Street, India",
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India",
    pinCode: 142663,
    status: "Processing",
    subtotal: 4000,
    discount: 1220,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 - 1220,
    _id: "asknadnndd",
    orderItems,
  });


  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status:prev.status === "Processing" ? "Shipped" : "Delivered"
    }))
  }

  return (
    <>
      <div className="adminContainer">
        <AdminSidebar />
        <main className="managementContainer">
          <section>
            <h2>Order Items</h2>
            {order.orderItems?.map((item, index) => (
              <ProductCard
              key={index}
                name={item.name}
                price={item.price}
                photo={item.photo}
                quantity={item.quantity}
                _id={item._id}
              />
            ))}
          </section>
          <article className="shipping_info_card">
            <h1>Order Info</h1>
            <h5>User Info</h5>
            <p>Name: {order.name}</p>
            <p>
              Address:
              {`${order.address}, ${order.city}, ${order.state}, ${order.country}, ${order.pinCode}`}
            </p>

            <h5>Amount Info</h5>
            <p>Subtotal:{order.subtotal}</p>
            <p>Shipping Charges:{order.shippingCharges}</p>
            <p>Tax:{order.tax}</p>
            <p>Discount:{order.discount}</p>
            <p>Total:{order.total}</p>

            <h5>Status Info</h5>
            <p>
              Status:
              <span
                className={
                  order.status === "Delivered"
                    ? "purple"
                    : order.status === "Shipped"
                    ? "green"
                    : "red"
                }
              >
                {order.status}
              </span>
            </p>

            <button onClick={updateHandler}>Process Status</button>
          </article>
        </main>
      </div>
    </>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <>
      <div className="transaction_product_card">
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>
          ${price} X {quantity} = ${quantity * price}
        </span>
      </div>
    </>
  );
};

export default ManageTransaction;
