export default function ProductCard({title, price, image}) {
    return(
        <div className="col col-sm-6 col-md-4 col-lg-4 mb-3">
            <div className="card h-100">
                <h5>{title}</h5>
                <img src={image} alt="product-image"/>
                <div className="card-body">
                    <span>${price}</span>
                </div>
            </div>
        </div>
    )
}