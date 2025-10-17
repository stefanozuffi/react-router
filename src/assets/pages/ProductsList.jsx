import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/cardss/ProductCard"


export default function ProductsList() {
    const [products, setProducts] = useState([])

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => setProducts(res.data))
    }

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products')
    }, [])


    return(
            <main className="container">
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