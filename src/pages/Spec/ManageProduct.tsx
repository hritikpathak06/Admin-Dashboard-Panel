import React, { FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ManageProduct = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(1);
  const [photo, setPhoto] = useState<string>(img);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhoto(reader.result);
        }
      };
    }
  };

  const createManageProductHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <div className="adminContainer">
        <AdminSidebar />
        <main className="managementContainer">
          <section>
            <strong>ID-agahdhdhdsks</strong>
            <img src={photo} alt="product_image" />
            <p>{name}</p>
            {stock > 0 ? <span className="green">Available</span> : <span className="red">Not Available</span>}
            <h3>${price}</h3>
          </section>
          <article>
            <form onSubmit={createManageProductHandler}>
              <h2>Manage Product</h2>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter The Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Enter The Product Price"
                  value={price}
                  onChange={(e: any) => setPrice(e.target.value)}
                  required
                  min={1}
                />
              </div>
              <div>
                <label>Stock</label>
                <input
                  type="number"
                  placeholder="Enter The Product Stock"
                  value={stock}
                  onChange={(e: any) => setStock(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Photo</label>
                <input
                  type="file"
                  placeholder="Enter The Product Stock"
                  onChange={handlePhotoChange}
                  required
                  accept="image/*"
                />
              </div>

              <button type="submit">Update</button>
            </form>
          </article>
        </main>
      </div>
    </>
  );
};

export default ManageProduct;
