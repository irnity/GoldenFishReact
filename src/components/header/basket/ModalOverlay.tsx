import classes from "./Basket.module.css"
import React, { FunctionComponent } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BasketSliceProps } from "../../../store/model"
import { basketActions } from "../../../store/basketSlice"

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
  const createOrder = () => {
    dispatch(basketActions.createOrder())
  }
  // console.log(basket)
  return (
    <div className={classes.modal}>
      <div className={classes.box}>
        <div className={classes.header}>ВИ ДОДАЛИ ТОВАР У КОШИК</div>

        <div className={classes.main}>
          <ul>
            {basket.map((product) => (
              <li className={classes.list_item} key={product.code}>
                <div className={classes.item}>
                  <div>
                    <img
                      src={product.image}
                      width={100}
                      height={100}
                      alt="ваш товар"
                    />
                  </div>
                  <div className={classes.info}>
                    <div>{product.title}</div>
                    <div className={classes.info_value}>
                      <button>+</button>
                      <span>{product.amountToBuy}</span>
                      <button>-</button>
                      <span>Ціна: {product.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.footer}>
          <div className={classes.footer_continue}>
            <span>Всього: {totalPrice}</span>
          </div>
          <div className={classes.footer_continue}>
            <button>Продовжити покупки</button>
            <button onClick={clearBasketHandler}>Очистити корзину</button>
            <button onClick={createOrder}>Оформити</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOverlay
