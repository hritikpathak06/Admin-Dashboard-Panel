import React, { FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

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

  const createNewProductHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted")
  };

  return (
    <>
      <div className="adminContainer">
        <AdminSidebar />
        <main className="managementContainer">
          <article>
            <form onSubmit={createNewProductHandler}>
              <h2>New Product</h2>
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
              {photo && <img src={photo} alt="new image" />}

              <button type="submit">Create</button>
            </form>
          </article>
        </main>
      </div>
    </>
  );
};

export default NewProduct;
