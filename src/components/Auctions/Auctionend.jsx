

import { useDispatch, useSelector } from "react-redux"
import { deactiveProduct, endAuction, endbidHistory} from "../../actions"

export default function Auctionend({product, auction}) { 
    const user = useSelector((state) => state.user.id); 
    const dispatch=useDispatch()
        dispatch(deactiveProduct(product._id))
        dispatch(endAuction(product.auctionId))
     dispatch(endbidHistory(user, auction))
} 