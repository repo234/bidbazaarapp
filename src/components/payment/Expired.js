import React from "react";
import { useDispatch } from "react-redux";
import { expiredProduct } from "../../actions";
export default function Expired({ product }) {
  const dispatch = useDispatch();
  dispatch(expiredProduct(product));
}
