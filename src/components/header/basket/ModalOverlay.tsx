import classes from "./Basket.module.css"
import React, { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { BasketSliceProps } from "../../../store/model"

interface ModalOverlayProps {
  onConfirm: () => void
}

const ModalOverlay: FunctionComponent<ModalOverlayProps> = () => {
  const basket = useSelector(
    (state: { basket: BasketSliceProps[] }) => state.basket
  )
  console.log(basket)
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
                    <img src={product.image} alt="ваш товар" />
                  </div>
                  <div className={classes.info}>
                    <div>{product.title}</div>
                    <div className={classes.info_value}>
                      <button>+</button>
                      <span>{1}</span>
                      <button>-</button>
                      <span>Ціна: {product.price}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.footer}>
          <div className={classes.footer_continue}>
            <span>Всього:</span>
          </div>
          <div className={classes.footer_continue}>
            <button>Продовжити покупки</button>
            <button>Оформити</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOverlay
