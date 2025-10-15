import { NavLink } from "react-router-dom";


export default function HomePage({onClick}) {
    return(
    
        <main>        
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h2 className="display-5 fw-bold">Dive Into Inexistent Products!</h2>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <NavLink className="btn btn-primary btn-lg" type="button">
                        Start Shopping
                    </NavLink>
                </div>
            </div>
            
        </main>
    
    )
}