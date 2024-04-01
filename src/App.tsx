import Footer from "./Components/Footer/Footer"
import  Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Ourproducts from "./Components/OurProducts/Ourproducts"
import { useBag } from './hooks/useBag';


function App() {

  const { data, bag, addToBag, clearBag, removeFromBag, 
    decreaseQuantity, increaseQuantity, isEmpty, bagTotal } = useBag()

  return (
    <>
    <Header
      bag={bag}
      removeFromBag={removeFromBag}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearBag={clearBag}
      isEmpty={isEmpty}
      bagTotal={bagTotal}
    />
    <div className="min-h-screen bg-[url('./assets/bg-main.png')] bg-cover object-center">
      <Hero/>
    </div>
    <Ourproducts
      data={data}
      addToBag={addToBag}
    />
    <Footer/>
    </>
  )
}

export default App
