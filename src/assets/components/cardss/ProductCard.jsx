import { Link, useParams } from "react-router-dom"
import CardLayout from "./CardLayout"
import Rating from "../Rating"
import { useState } from "react";


export default function ProductCard({id, title, price, image, description, rating, category, show_d, sm=12, md=6, lg=4, cutTitle=true}) {

    let catClass;
    if (category === "men's clothing") {
        catClass = 'man'
    } else if (category === "women's clothing") {
        catClass = 'woman'
    } else if (category === "jewelery") {
        catClass = 'jewl'
    } else if (category === "electronics") {
        catClass = 'elec'
    } else {
        catClass = 'no-cat'
    }

    return (
                <div className={`col col-sm-${sm} col-md-${md} col-lg-${lg} mb-3`}>
                    <Link to={`/products/${id}`} className={`card ${catClass} d-flex justify-content-between companyCard h-100`}>
                    <div className="card-header">
                        <h5 className={cutTitle ? 'cut' : ''}>{title}</h5>
                        <span>{category}</span>
                    </div>
                        <div className="img-ctn d-flex justify-content-center align-items-center">
                            {image && <img src={image} alt="card-image"/>}
                        </div>
                        
                        <div className="card-body">
                            {price ? <span className="d-block"> ${price}</span> : null}
                            {description  && show_d ? <span className="description d-block"> {description}</span> : null}
                            <Rating rating={rating}/>
                            
                        </div>
                    </Link>
                </div>
        
    )
}