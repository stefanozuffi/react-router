import { NavLink } from "react-router-dom"
import CardLayout from "./CardLayout"
import Rating from "../Rating"


export default function ProductCard({title, price, image, description, rating, category, show_d}) {

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
                <div className={`col col-sm-12 col-md-6 col-lg-4 mb-3`}>
                    <NavLink to='/' className={`card ${catClass} d-flex justify-content-between companyCard h-100`}>
                    <div className="card-header">
                        <h5>{title}</h5>
                        <span>{category}</span>
                    </div>
                        
                        {image && <img src={image} alt="card-image"/>}
                        <div className="card-body">
                            {price ? <span className="d-block"> ${price}</span> : null}
                            {description  && show_d ? <span className="d-block"> {description}</span> : null}
                            <Rating rating={rating}/>
                            
                        </div>
                    </NavLink>
                </div>
        
    )
}