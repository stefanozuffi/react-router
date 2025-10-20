import {BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import Contacts from "./assets/pages/Contacts"
import ProductsList from "./assets/pages/ProductsList"
import DefaultLayout from "./assets/pages/DefaultLayout"
import ProductPage from "./assets/pages/ProductPage"

function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route element={<DefaultLayout/>}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/us" element={<Contacts/>}/>
              <Route path="/products" element={<ProductsList/>}/>
              <Route path="/products/:id" element={<ProductPage/>}/>
          </Route>
             
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
