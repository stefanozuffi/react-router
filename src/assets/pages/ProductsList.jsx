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


    const groupedProducts = products.reduce((acc, product) => {
        const category = product.category
        if (!acc[category]) acc[category] = []
        acc[category].push(product)
        return acc
    }, {})

    return(
        <main className="container">
            {products.length === 0 && (
                <div className="loading-wrap d-flex justify-content-center align-items-center">
                    <Superballs size="100" speed="1.4" color="white" />
                </div>
            )}
            
            {products.length > 0 && (
                <>
                    {Object.entries(groupedProducts).map(([category, items]) => (
                        <section key={category} className="mb-5">
                            <h2 className="cat-title text-capitalize mb-4">{category}</h2>
                            <div className="row g-5">
                                {items.map(item => (
                                    <ProductCard
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        description={item.description}
                                        rating={item.rating.rate}
                                        category={item.category}
                                        key={item.id}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </>
            )}
        </main>
    )
}