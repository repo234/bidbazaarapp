
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deactiveProduct, endAuction, bidHistory } from "../../actions"

export default function Auctionend({product, auction}) { 

    const userId=useSelector(state=>state.user.id)
    const dispatch=useDispatch()
        dispatch(deactiveProduct(product._id))
        dispatch(endAuction(product.auctionId))
        dispatch(bidHistory(product, auction, userId))
}