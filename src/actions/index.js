import axios from "../helper/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
// login
export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: { ...user },
    });
    const res = await axios
      .post("/api/users/login", { ...user })
      .then((res) => {
        console.log(res);

        if (
          res.data.status === "Logged in successfully" &&
          res.data.user.role === "user"
        ) {
          toast.success(res.data.status);
          const token = res.data.data;
          const user = res.data.user;
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("user", JSON.stringify(user));
          const dataa = JSON.parse(localStorage.getItem("user"));
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
              token: window.localStorage.getItem(token),
              name: dataa.name,
              email: dataa.email,
              id: dataa._id,
              role: dataa.role,
            },
          });
        } else {
          toast.error(res.data.message);
        }
      });
    if (res.status === 400) {
      alert("Something went wrong");
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

//all categories
export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: "CATEGORIES_REQUEST" });
    const res = await axios.get("/api/categories/");
    console.log(res);
    if (res.data !== "") {
      dispatch({
        type: "CATEGORIES_SUCCESS",
        payload: { categories: res.data },
      });
    }
    if (res.status === 400) {
      alert("Something went wrong");
      console.log(res.data.error);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

//single category
export const getCategory = (id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/categories/" + id);
    console.log(res.data);
    if (res.data !== "") {
      dispatch({
        type: "CATEGORIES_FOUND",
        payload: { category: res.data },
      });
    }

    if (res.status === 400) {
      alert("Something went wrong");
      console.log(res.data.error);
    }
  };
};

//all auction products of user
export const auctionProducts = (id) => {
  return async (dispatch) => {
    dispatch({ type: "AUCTION_PRODUCT_REQUEST" });
    const res = await axios.get("/api/products/user/" + id);
    console.log(res);
    if (res.data.products.length !== 0) {
      const products = res.data.products;

      dispatch({
        type: "AUCTION_PRODUCT_SUCCESS",
        payload: { products: products },
      });
    }

    if (res.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

// all poroducts on auction
export const allProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/products/auctionedproducts");
    if (res.data.products !== "") {
      const products = res.data.products;
      dispatch({
        type: "PRODUCT_SUCCESS",
        payload: { products: products },
      });
    }
    if (res.data.products === "") {
      toast.info("no product found");
    }
    if (res.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

//get single auction
export const getAuction = (id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/auction/auction/" + id);

    if (res.data.length !== 0) {
      window.location.reload();

      dispatch({
        type: "AUCTION_PRODUCT",
        payload: { auction: res.data.auction, product: res.data.product },
      });
    }
    if (res.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

//get auction detail after ending
export const getSingleAuction = (id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/auction//singleAuction/" + id);

    if (res.data !== "") {
      window.location.reload();
      dispatch({
        type: "AUCTION_AFTER_END",
        payload: { auction: res.data.auction },
      });
    }
    if (res.status === 400) {
      console.log(res.data.error);
      alert("Something went wrong");
      console.log(res.data.error);
      dispatch({
        type: "AUCTION_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

//update bid
export const updateBid = (id, bid, user) => {
  return async (dispatch) => {
    const res = await axios.put(
      "/api/auction/bid/" + id,
      { bid: bid, user: user },
      {
        headers: {
          "x-auth-token": `${localStorage.getItem("token")}`,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
    console.log(res);
    if (res.data.message === "bid added successfully") {
      toast.success(res.data.message);
      dispatch({
        type: "BID_ADDED",
        payload: { auction: res.data.auction },
      });
    } else {
      toast.error(res.data);
    }
    if (res.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

//inactive products
export const getInactiveProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/products/inactive/" + id);
    console.log(res);
    if (res.data.products !== "") {
      const products = res.data.products;
      dispatch({
        type: "INACTIVE_PRODUCT_SUCCESS",
        payload: { inacproducts: products },
      });
    } else if (res.data.products === "") {
      toast.info("no products yet");
    }
    if (res.data.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const addProduct = (form) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_PRODUCT" });
    const res = await axios.post("/api/products/create", form, {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data === "product created successfully") {
      toast.success(res.data);
    } else {
      toast.error(res.data);
    }
    if (res.data.status === 400) {
      toast.error("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const updateProduct = (form, id) => {
  return async (dispatch) => {
    const res = await axios.put("/api/products/update/" + id, form, {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data === "updated") {
      alert(res.data);
    }
    if (res.data.status === 400) {
      alert("Something went wrong");
      console.log(res.data.error);
    }
  };
};
// single product data
export const singleProduct = (_id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/products/" + _id);
    if (res.data !== "") {
      const product = res.data;
      dispatch({
        type: "SINGLE_PRODUCT_SUCCESS",
        payload: {
          product: product,
        },
      });
    } else if (res.data === "") {
      toast.info("no products found");
    } else {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const activeProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.patch("/api/products/active/" + id);
    console.log(res);
    if (res.data === "product activated") {
      toast.success("product activated");
    }
    if (res.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const createAuction = (id) => {
  return async (dispatch) => {
    const res = await axios.post("/api/auction/" + id);
    console.log(res);

    if (res.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const deactiveProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.patch("/api/products/deactive/" + id);
    console.log(res.data);
  };
};

export const endAuction = (id) => {
  return async (dispatch) => {
    const res = await axios.patch("/api/auction/end/" + id);
    console.log(res.data);
  };
};

export const inprogressbidHistory = (id) => {
  return async (dispatch) => {
    const res = await axios.get("/api/auction/inprogresshistory/" + id);
    console.log(res.data);
    dispatch({
      type: "BIDHISTORY_SUCCESS",
      payload: {
        bidHistory: res.data,
      },
    });
    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const bidHistory = (product, auction, bid, userId) => {
  return async (dispatch) => {
    const data = {
      image: product.images[0].img,
      name: product.name,
      price: bid,
      totalBids: auction.bids.length + 1,
      auctionId: auction._id,
      auctioned: "in progress",
      status: "-",
      paymentStatus: "-",
      userId: userId,
    };
    console.log(data);
    const res = await axios.post("/api/history/bidhistory", {
      data,
    });
    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};

export const getbidHistory = (userid) => {
  return async (dispatch) => {
    const res = await axios.get("/api/history/bidhistory/" + userid);
    console.log(res.data);

    dispatch({
      type: "GETBIDHISTORY_SUCCESS",
      payload: {
        getbidHistory: res.data,
      },
    });

    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};
export const updatebidHistory = (user, auction, highestprice, totalBids) => {
  return async (dispatch) => {
    const res = await axios.put("/api/history/bidhistory/update", {
      user: user,
      auctionId: auction,
      price: highestprice,
      totalBids: totalBids,
    });

    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};
export const endbidHistory = (user, auction) => {
  return async (dispatch) => {
    console.log(user);
    console.log(auction.winner);
    const res = await axios.put("/api/history/bidhistory/end", {
      user: user,
      auctionId: auction._id,
      price: auction.currentPrice,
      totalBids: auction.bids.length,
      status: user === auction.winner ? "won" : "loss",
      paymentStatus: user === auction.winner ? "unpaid" : "-",
    });
    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};
export const getunpaidProducts = (userid) => {
  return async (dispatch) => {
    const res = await axios.get("/api/history/bidhistory/unpaid/" + userid);
    console.log(res.data);
    dispatch({
      type: "UNPAIDPRODUCTS_SUCCESS",
      payload: {
        unpaid: res.data,
      },
    });
    if (res.data.status === 400) {
      toast.info("Something went wrong");
      console.log(res.data.error);
    }
  };
};
