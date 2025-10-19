import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/cardss/ProductCard"
import { Superballs } from 'ldrs/react'
import 'ldrs/react/Superballs.css'


export default function ProductsList() {
    const [products, setProducts] = useState([])

    setTimeout(() => {
        fetchData('https://fakestoreapi.com/products')
    }, 3000)

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => setProducts(res.data))
    }

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products')
    }, [])


    return(
            <main className="container"> 
                {/* {!products &&
                    <Superballs
                      size="40"
                      speed="1.4"
                      color="black" 
                    />}  this function will be added for the single product card*/}
                <div className="container"> 
                <div className="row g-5"> 
                    {products.map(item => 
                         <ProductCard title={item.title} image={item.image} price={item.price} description={item.description} key={item.id} rating={item.rating.rate} category={item.category}/>
                    )}
                </div>
            </div>
            </main>

        
    )
}