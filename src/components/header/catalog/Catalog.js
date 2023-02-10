import { useState } from "react"
import { Link } from "react-router-dom"
import Cat from "./Cat"
import classes from "./Catalog.module.css"

const catalogList = [
  {
    name: "Каталог",
    catalog: [
      "1",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Спінінг",
    catalog: [
      "2",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Фідер",
    catalog: [
      "3",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Короп",
    catalog: [
      "4",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Поплавок",
    catalog: [
      "5",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Зима",
    catalog: [
      "6",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Мора",
    catalog: [
      "7",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Туризм",
    catalog: [
      "8",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
  {
    name: "Екірування",
    catalog: [
      "9",
      "Котушки",
      "Жилки",
      "Шнури",
      "Готове оснащення",
      "Поплавці та маркери",
      "Все для монтажу",
      "Інструменти для бойлів і пелетсу",
      "Гачки",
      "Приманки",
    ],
  },
]

function NavigationMain() {
  const [toggleNavigation, setToggleNavigation] = useState(false)
  const [flade, setFlade] = useState(classes.catalog_in)
  const [list, setList] = useState([])

  const toggleNavigationHandler = (data) => {
    if (list !== data) {
      setToggleNavigation((prevState) => (prevState = true))
      setFlade(classes.catalog_in)
      setList((prevState) => (prevState = data))
      return
    }

    if (toggleNavigation === false) {
      setToggleNavigation((prevState) => (prevState = true))
      setFlade(classes.catalog_in)
      setList((prevState) => (prevState = data))
    } else {
      setFlade(classes.catalog_out)
      setTimeout(() => {
        setToggleNavigation((prevState) => (prevState = false))
        setList((prevState) => (prevState = []))
      }, 0.3 * 1000)
    }
  }

  return (
    <>
      <div className={classes.catalog}>
        {catalogList.map((data) => (
          <Cat
            toggleNavigationHandler={toggleNavigationHandler}
            title={data.name}
            catalog={data.catalog}
          />
        ))}
      </div>
      {toggleNavigation && (
        <div className={flade}>
          <div className={classes.catalog_link}>
            {list.map((catalog) => (
              <div className={classes.catalog_link_text}>
                <Link to={`/${catalog}`} className={classes.link}>
                  {catalog}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationMain
