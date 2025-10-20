import { Link, useNavigate } from "react-router-dom"


export default function NotFound() {
    const navigate = useNavigate()
    return(
        <div className="err-ctn container d-flex flex-column justify-content-center align-items-center gap-3" style={{height: '50%',
                                                   color: 'white'}}>
            <h1 style={{color: 'red'}}>404: Product Not Found</h1>
            <p>...we are sorry but this product does not exist</p>
            <p>(in the end it's not really serious, we don't even have a storage, nor we as a company exist to be honest)</p>
            
            <div className="d-flex gap-3 ps-3">
                
           
                <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    Go back
                </button>
            
            <Link to='/products'>
                <button className="btn btn-primary">
                     Go to Products
                </button>
            </Link>

            </div>
            
        </div>
    )
}