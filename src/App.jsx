import {BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import WhoAreWe from "./assets/pages/WhoAreWe"
import ProductsList from "./assets/pages/ProductsList"

function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
             <Route path="/us" element={<WhoAreWe/>}/>
             <Route path="/products" element={<ProductsList/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
