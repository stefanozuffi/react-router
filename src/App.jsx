import {BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import Contacts from "./assets/pages/Contacts"
import ProductsList from "./assets/pages/ProductsList"

function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
             <Route path="/us" element={<Contacts/>}/>
             <Route path="/products" element={<ProductsList/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
