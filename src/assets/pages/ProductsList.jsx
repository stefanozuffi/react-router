import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/cardss/ProductCard"
import { Superballs } from 'ldrs/react'
import 'ldrs/react/Superballs.css'


export default function ProductsList() {
    const [products, setProducts] = useState([])

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData('https://fakestoreapi.com/products')
        }, 1500)
    }, [])


    return(
            <main className="container"> 
                {products.length == 0 &&
                <div className="loading-wrap d-flex justify-content-center align-items-center">
                    <Superballs
                      size="100"
                      speed="1.4"
                      color="white" 
                    />
                </div>
                    } 
                {products.length != 0 && <div className="container"> 
                    <div className="row g-5"> 
                        {products.map(item => 
                            <ProductCard id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} key={item.id} rating={item.rating.rate} category={item.category}/>
                        )}
                    </div>
                </div>}
            </main>

        
    )
}