import { useParams, useRouteLoaderData } from "react-router-dom"
import Characteristics from "../../components/main/about/info/Characteristics"
import Info from "../../components/main/about/info/Info"
import Description from "../../components/main/about/info/Description"
import classes from "./InformationPage.module.css"
import Additinal from "../../components/main/about/info/Additinal"
import Media from "../../components/main/about/info/Media"
import Recomendation from "../../components/main/about/info/Recomendation"
import Reviews from "../../components/main/about/info/Reviews"

function InformationPage() {
  // get info by product id loader
  const product = useRouteLoaderData("product-detail")

  const params = useParams()

  let info = null
  switch (params.productinfo) {
    case "info":
      info = (
        <Info title={params.productinfo} description={product.description} />
      )
      break

    case "characteristics":
      info = <Characteristics title={params.productinfo} product={product} />
      break

    case "description":
      info = (
        <Description
          title={params.productinfo}
          description={product.description}
        />
      )
      break

    case "additinal":
      info = <Additinal />
      break

    case "media":
      info = <Media />
      break

    case "recomendation":
      info = <Recomendation />
      break

    case "reviews":
      info = <Reviews />
      break

    default:
      break
  }

  return <div className={classes.box}>{info}</div>
}

export default InformationPage
