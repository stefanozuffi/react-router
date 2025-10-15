import { NavLink } from "react-router-dom";


export default function HomePage() {
    return(
    
        <main>        
            <div className="jumbo container p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h2 className="display-5 fw-bold"> Dive Into Inexistent Products! </h2>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <NavLink to={'/products'} className="btn btn-primary btn-lg" type="button">
                        Start Shopping
                    </NavLink>
                </div>
            </div>
            
        </main>
    
    )
}