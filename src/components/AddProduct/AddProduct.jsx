import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addProduct } from "../../actions";


const Used = [
  "1 month",
  "2 months",
  "3 months",
  "4 months",
  ,
  "5 months",
  "6 months",
  "7 months",
  "8 months",
  "9 months",
  "10 months",
  "11 months",
  "1 year",
];
export default function AddProduct() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState("");

  const [active] = useState(false);
  const categories = useSelector((state) => state.categories.categories);

  console.log(images);

  const onSelectFile = (event) => {
    setImageError("");
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

  const sendData = (data) => {
    if (images.length == 0) {
      setImageError("* image required");
    } else if (images.length > 0) {
      setImageError("");
      let form = new FormData();
    form.append("name", data.name);
    form.append("price", data.price);
    form.append("quantity", data.quantity);
    form.append("condition", data.condition);
    form.append("categoryId", data.categoryId);
    form.append("time", data.time);
    form.append("discription", data.discription);
    form.append("active", active);
    form.append("used", data.used)
    for (let pic of images) {
      form.append("images", pic);
    }
      dispatch(addProduct(form));
     navigate("myAuctions")
    }
  };
  return (
    <div>
      <div className="container justify-items-center ">
        <div className="w-full my-10 p-6 m-auto bg-pink rounded-md shadow-md md:w-[60%]">
          <h1 className="text-2xl font-bold text-center text-black ">
            Add Product
          </h1>
          <form
            className="mt-6  "
            method="post"
            encype="multipart/form-data"
            onSubmit={handleSubmit(sendData)}
          >
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-bold textblack"
              >
                name
              </label>
              <input
                type="text"
                className="block  w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("name", {
                  required: " * name is required",
                  minLength: {
                    value: 3,
                    message: "* name at least conatin 3 letters",
                  },
                  maxLength: {
                    value: 100,
                    message: "* must be less then 100 characters",
                  },
                })}
              />
            </div>
            <p className="text-orange font-bold">{errors.name?.message}</p>
            <div className="flex ">
              <div className="flex flex-col  mr-5 w-[40%]">
                <div className="   md:mt-[18%]  sm:mt-[55%]">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold text-black"
                  >
                    price
                  </label>
                  <input
                    type="number"
                    className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("price", {
                      required: "*price is required",
                      min: {
                        value: 100,
                        message: "* price must be more then Rs: 100",
                      },
                      max: {
                        value: 50000,
                        message: "* must be less then Rs: 50000 ",
                      },
                    })}
                  />
                </div>
                <p className="text-orange font-bold ">
                  {errors.price?.message}
                </p>
              </div>

              <div className="flex flex-col w-[40%]  ">
                <div className=" md:mt-[18%]  sm:mt-[55%] mr-5 ">
                  <label
                    htmlFor="quantity"
                    className=" block text-sm font-bold text-black"
                  >
                    quantity
                  </label>
                  <input
                    type="number"
                    className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("quantity", {
                      required: "* quantity is required",
                    })}
                  />
                </div>
                <p className="text-orange font-bold ">
                  {errors.quantity?.message}
                </p>
              </div>
              <div className="flex flex-col w-[40%] ">
                <div className="mt-[9%]">
                  <label
                    htmlFor="time"
                    className=" block  text-sm font-bold  text-black "
                  >
                    Auction duration (minimum 1 maximum 4320 hours)
                  </label>
                  <input
                    type="number"
                    className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("time", {
                      required: "* time is required",
                      min: {
                        value: 1,
                        message: "* at least 1 hour",
                      },
                      max: {
                        value: 4320,
                        message: "* less then 4320 hours",
                      },
                    })}
                  />
                </div>
                <p className="text-orange font-bold">{errors.time?.message}</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col w-[50%] ">
                <div className="  pt-[18%] mr-5 ">
                  <label
                    htmlFor="condition"
                    className="block text-sm font-bold text-black"
                  >
                    condition
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2  shadow-md  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("condition", {
                      required: "* condition is required",
                    })}
                  />
                </div>
                <p className="text-orange font-bold">
                  {errors.condition?.message}
                </p>
              </div>
              <div className="flex flex-col w-[50%] ">
                <div className="  pt-[18%] mr-5 ">
                  <label
                    htmlFor="category"
                    className="block text-sm font-bold text-black"
                  >
                    Used duration
                  </label>
                  <select
                    className="mt-2 p-2  shadow-md  rounded-lg w-full hover:border-orange"
                    {...register("used", { required: "* used is required" })}
                  >
                    <option value="">Select</option>

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
                <p className="text-orange font-bold">{errors.used?.message}</p>
              </div>
              <div className="flex flex-col  w-[50%]  ">
                <div className="  pt-[18%]  ">
                  <label
                    htmlFor="categoryId"
                    className="block text-sm font-bold text-black"
                  >
                    category
                  </label>
                  <select
                    className="mt-2 p-2 w-full rounded-lg  shadow-md  hover:border-orange"
                    {...register("categoryId", {
                      required: "* category is required",
                    })}
                  >
                    <option value="">Select</option>

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
                <p className="text-orange font-bold">
                  {errors.categoryId?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="  pt-[4%]  ">
                <label
                  htmlFor="discription"
                  className="block text-sm font-bold text-black"
                >
                  discription
                </label>
                <textarea
                  type="text"
                  className="block w-full px-4 py-2 mt-3 shadow-md  bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("discription", {
                    required: "* discription is required",
                  })}
                />
              </div>
              <p className="text-orange font-bold">
                {errors.discription?.message}
              </p>
            </div>
            <input
              id="images"
              type="file"
              name="images"
              onChange={onSelectFile}
              accept="image/png , image/jpeg, image/webp, image/jpg"
            />
            <p className="text-orange  font-bold">{imageError}</p>
            <div className="flex  p-4 flex-wrap relative shadow-sm">
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
              className="tooltip border p-2 text-base shadow-md w-[20%]  mt-3 ml-[40%]  focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70 "
              data-toggle="tooltip"
              data-placement="top"
              title="double click to submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
