import { NavLink } from "react-router-dom";
import ShoppingPic from '../../img/undraw_web-shopping_xd5k.svg'

export default function HomePage() {
    return(
    
    // find them in our product list
    // then bring some empty shopping bags and pretend you actually got anything!
        <main>        
            <div className="home-ctn d-flex flex-column gap-3">

                 {/* Presentation */}
                    <div className="home-ctn-in d-flex justify-content-around">
                        <div className="jumbo home p-5 mb-4 bg-light rounded-3">
                            <div className="container-fluid py-5">
                                <h2 className="display-5 fw-bold"> Dive Into Inexistent Products! </h2>
                                <p className="col-md-8 fs-4">
                                Welcome to The Fake E-Commerce, where imagination meets reality! 
                                Explore our curated collection of products that don't actually exist, 
                                but look absolutely stunning. From cutting-edge electronics to timeless 
                                fashion pieces, discover items that are perfect for your demo projects, 
                                portfolios, or just for browsing pleasure. No real transactions, 
                                just pure shopping experience!
                                </p>
                                <NavLink to={'/products'} className="btn btn-primary btn-lg" type="button">
                                    Start Shopping
                                </NavLink>
                            </div>
                        </div>
                        <div className="pic-ctn">
                            <img src={ShoppingPic} alt="shopping picture" />
                        </div>
                    </div>

                    {/* invent a list of things and hold a cart, if you have one */}
            </div>
            
            
            
        </main>
    
    )
}