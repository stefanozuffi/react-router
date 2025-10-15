import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/cards/ProductCard"
import FixedHeader from "../components/FixedHeader"
import CardCtn from "../components/CardCtn"

export default function ProductsList() {
    const [products, setProducts] = useState([])

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => setProducts(res.data))
    }

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products')
    }, [])

    const productsProps = {
        id: 'id', 
        title: 'title',
        price: 'price',
        image: 'image'
    }

    return(
            <main className="container">
                <CardCtn Card={ProductCard} card_props={productsProps} list={products}/>
            </main>

        
    )
}