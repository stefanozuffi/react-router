import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"

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
        <>
            <header className="container">
                <h1>Our Products</h1>
            </header>
            <main className="container">
                <div className="container">
                    <div className="row">
                        {products.map(product => 
                            <ProductCard title={product.title} image={product.image} price={product.price} key={product.id}/>
                        )}
                    </div>
                </div>
                
            </main>
        </>
        
    )
}