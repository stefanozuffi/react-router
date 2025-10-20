import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/cardss/ProductCard"
import { Superballs } from 'ldrs/react'
import 'ldrs/react/Superballs.css'

export default function ProductPage() { 

    const { id } = useParams() 
    const [prod, setProd] = useState(null) 
    const endpoint = `https://fakestoreapi.com/products/${id}` 

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => setProd(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData(endpoint)
        }, 1500)
    }, [id])

   

    return(
        <main>
            {!prod &&
                <div className="loading-wrap d-flex justify-content-center align-items-center">
                    <Superballs
                      size="100"
                      speed="1.4"
                      color="white" 
                    />
                </div>
                    } 
           {prod && <div className="prod-wrap d-flex justify-content-center align-items-center">
                <ProductCard
                title={prod.title} 
                image={prod.image} 
                price={prod.price} 
                description={prod.description}
                 key={prod.id} 
                 rating={prod.rating.rate} 
                 category={prod.category}/>
            </div>}
        </main>
    )
}