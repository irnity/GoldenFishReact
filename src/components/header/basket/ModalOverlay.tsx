import classes from "./Basket.module.css"
import React, { FunctionComponent } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BasketSliceProps } from "../../../store/model"
import { basketActions } from "../../../store/basketSlice"
import { Link } from "react-router-dom"
import Order from "../../order/Order"

interface ModalOverlayProps {
  onConfirm: () => void
}

const ModalOverlay: FunctionComponent<ModalOverlayProps> = () => {
  const dispatch = useDispatch()

  const basket = useSelector(
    (state: { basket: BasketSliceProps }) => state.basket.basket
  )
  const totalPrice = useSelector(
    (state: { basket: { totalPrice: number } }) => state.basket.totalPrice
  )
  const clearBasketHandler = () => {
    dispatch(basketActions.clearBasket())
  }
  return (
    <div className={classes.modal}>
      <div className={classes.box}>
        <div className={classes.header}>ВИ ДОДАЛИ ТОВАР У КОШИК</div>

        <div className={classes.main}>
          <Order basket={basket} />
        </div>

        <div className={classes.footer}>
          <div className={classes.footer_continue}>
            <span>Всього: {totalPrice}</span>
          </div>
          <div className={classes.footer_continue}>
            <button>Продовжити покупки</button>
            <button onClick={clearBasketHandler}>Очистити корзину</button>
            <Link to="/order">
              <button>Оформити</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOverlay
