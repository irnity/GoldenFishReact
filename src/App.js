import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header.js"
import Main from "./components/main/Main"
import MainCart from "./components/mainPageCart/MainCart"

function App() {
  return (
    <MainCart>
      <Header />
      <Main />
      <Footer />
    </MainCart>
  )
}

export default App
