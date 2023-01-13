import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../actions";

const Used=["1 month", "2 months", "3 months", "4 months", , "5 months", "6 months", "7 months", "8 months", "9 months", "10 months", "11 months", "1 year"]

export default function UpdateProduct() {
    const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const id=product._id
  const [selectedImages, setSelectedImages] = useState([]);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [condition, setCondition] = useState(product.condition);
  const [categoryId, setCategory] = useState(product.categoryId);
  const [time, setTime] = useState(product.time);
  const [used, setUsed]=useState(product.used)
  const [discription, setDiscription] = useState(product.discription);
  const [images, setImages] = useState(product.images);
  const [validimg, setValidimg] = useState(false);
  const [active, setActive] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const navigate = useNavigate();


  const onSelectFile = (event) => {
    setImages([...images, event.target.files[0]]);
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = "";
  };
  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    const index = selectedImages.indexOf(image);
    images.splice(index, 1);
    URL.revokeObjectURL(image);
  }
  const sendData = (e) => {
    e.preventDefault();
    if (images.length > 0) {
      setValidimg(true);
    } else {
      alert("image required");
    }
    let form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("condition", condition);
    form.append("categoryId", categoryId);
    form.append("time", time);
    form.append("discription", discription);
    form.append("active", active);
   form.append("used", used)
   for (let pic of images) {
    form.append("images", pic);
  }
   dispatch(updateProduct(form , id))
  };

  return (
    <div>
    <div className="container justify-items-center ">
      <div className="w-full my-10 p-6 m-auto bg-pink rounded-md shadow-md md:w-[60%]">
        <h1 className="text-2xl font-bold text-center text-black ">
         Update Product
        </h1>
        <form className="mt-6  " method="put" encype="multipart/form-data">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-orange"
            >
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              className="block  w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex ">
            <div className="w-[40%] mb-2 mr-10 mt-[10%]">
              <label
                htmlFor="price"
                className="block text-sm font-bold text-orange"
              >
                price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={price}
                className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-2 w-[40%] mr-10 mt-[10%]">
              <label
                htmlFor="quantity"
                className=" block text-sm font-bold text-orange "
              >
                quantity
              </label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                name="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 w-[40%]  mt-[4%]">
              <label
                htmlFor="time"
                className=" block text-sm font-bold  text-orange "
              >
                  Auction duration (minimum 1 maximum 4320 hours)
              </label>
              <input
                id="time"
                name="time"
                type="number"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-[40%] mb-2 mr-10">
              <label
                htmlFor="condition"
                className="block text-sm font-bold text-orange"
              >
                condition
              </label>
              <input
                id="condition"
                type="text"
                name="condition"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-[40%] mb-2 mr-10">
            <label
                htmlFor="category"
                className="block text-sm font-bold text-orange"
              >
                Used duration
              </label>
              <select
                id="used"
                name="used"
                value={used}
                className="mt-2 p-2  shadow-md  rounded-lg w-full hover:border-orange"
                onChange={(e) => {
                  setUsed(e.target.value);
                }}
              >
                <option defaultValue >Select</option>

                {Used.map((option, index) => {
                  return (
                    <option
                      className="box f_flex"
                      key={index}
                      value={option._id}
                    >
                      {option}
                    </option>
                  );
                })}
                </select>
            </div>
            <div className="w-[40%] ">
              <label
                htmlFor="category"
                className="block text-sm font-bold text-orange"
              >
                category
              </label>
              <select
                id="categoryId"
                name="categoryId"
                value={categoryId}
                className="mt-2 p-2 rounded-lg  shadow-md  hover:border-orange"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option defaultValue >Select</option>

                {categories.map((option, index) => {
                  return (
                    <option
                      className="box f_flex"
                      key={index}
                      value={option._id}
                    >
                      {option.name}
                    </option>
                  );
                })}
              </select>
            </div>
           
          </div>
          <div className="my-5">
            <label
              htmlFor="discription"
              className="block text-sm font-bold text-orange"
            >
              discription
            </label>
            <textarea
              id="discription"
              type="text"
              name="discription"
              value={discription}
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
              className="block w-full px-4 py-2 my-3 shadow-md  bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
         
          <input
            id="images"
            type="file"
            name="images"
            onChange={onSelectFile}
            accept="image/png , image/jpeg, image/webp, image/jpg"
          />

          <div className="flex flex-wrap relative shadow-sm">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div
                    key={image}
                    className="m-3  p-1"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={image}
                      alt="upload"
                      className="rounded-lg h-[80%]"
                    />
                    <button
                      className="mt-2 p-1  text-sm"
                      onClick={() => deleteHandler(image)}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
          <button
            className="border p-2 shadow-md w-[20%] mt-3 ml-[40%]"
            onClick={sendData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
