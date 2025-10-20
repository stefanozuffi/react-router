import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div className="err-ctn container" style={{height: '500px', backgroundColor: 'white'}}>
            <h1>404: Product Not Found</h1>
            <p>...we are sorry but this product does not exist</p>
            <p>(in the end it's not really serious, we don't even have a storage, nor we as a company exist to be honest)</p>
            
            <Link to='/products'>
                <button className="btn dark-btn">
                    Go to Products
                </button>
            </Link>

            <Link to=''>
                <button className="btn dark-btn">
                    Go back
                </button>
            </Link>
        </div>
    )
}