import { useParams } from "react-router-dom"
import axios from "axios"
import { use, useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
        setProd(null)
        setTimeout(() => {
            fetchData(endpoint)
        }, 500)
    }, [id])


   

    return(
        <main className="container">
            <div className="item-ctn">
            <div className="btn-ctn up d-flex justify-content-center gap-5">
                
                <Link  to={`/products/${parseInt(id) - 1}`}>
                    <button className="btn btn-dark">
                        {"<"}
                    </button>
                </Link>
                <Link  to={`/products/${parseInt(id) + 1}`}>
                    <button className="btn btn-dark">
                        {">"}
                    </button>
                    
                </Link>
            </div>

            
                {!prod &&
                    <div className="loading-wrap d-flex justify-content-center align-items-center">
                        <Superballs
                        size="100"
                        speed="1.4"
                        color="white" 
                        />
                    </div>
                        } 
                
            {prod && <div className="prod-wrap">
                    <ProductCard
                    id={prod.id}
                    title={prod.title} 
                    image={prod.image} 
                    price={prod.price} 
                    description={prod.description}
                    show_d={true}
                    key={prod.id} 
                    rating={prod.rating.rate} 
                    category={prod.category}
                    sm={10}
                    md={8}
                    lg={8}
                    cutTitle={false}/>
                </div>}
            </div>
            <div className="btn-ctn down d-flex justify-content-center gap-5">
                
                <Link  to={`/products/${parseInt(id) - 1}`}>
                    <button className="btn btn-dark">
                        {"<"}
                    </button>
                </Link>
                <Link  to={`/products/${parseInt(id) + 1}`}>
                    <button className="btn btn-dark">
                        {">"}
                    </button>
                    
                </Link>
            </div>
        </main>
    )
}