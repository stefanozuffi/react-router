import { NavLink } from "react-router-dom";
import ShoppingPic from '../../img/undraw_web-shopping_xd5k.svg'
import ShoppingPic2 from '../../img/GreenWebShop.svg'
import EmptyCart from '../../img/EmptyCart.svg'
import WishList from '../../img/WishList.svg'
import FullCartel from '../../img/FullCartel.svg'
import Receipt from '../../img/Receipt.svg'
import Logistics from '../../img/Logistics.svg'


export default function HomePage() {
    return(
    
    
    // then bring some empty shopping bags and pretend you actually got anything!
        <main>        
            <div className="home-ctn d-flex flex-column gap-3">

                 {/* Presentation */}
                    <div className="home-ctn-in d-flex justify-content-between flex-sm-column flex-md-row align-items-sm-center mb-4">
                        <div className="jumbo home double-col d-flex flex-column align-items-center">
                            <div className="container-fluid py-2">
                                <h2 className="display-5 fw-bold"> Dive Into Inexistent Products! </h2>
                                <p className="col-md-11">
                                Welcome to The Fake E-Commerce, where imagination meets reality! 
                                Explore our curated collection of products that don't actually exist, 
                                but look absolutely stunning. From cutting-edge electronics to timeless 
                                fashion pieces, discover items that are perfect for your demo projects, 
                                portfolios, or just for browsing pleasure. No real transactions, 
                                just pure shopping experience!
                                </p>
                                <NavLink to={'/products'} className="j-btn" type="button">
                                    Start Shopping
                                </NavLink>
                            </div>
                        </div>
                        <div className="pic-ctn">
                            <img src={ShoppingPic2} alt="shopping picture" />
                        </div>
                    </div>

                    {/* invent a list of things and hold a cart, if you have one */}
                    <div className="home-ctn-in one-col d-flex flex-column justify-content-between align-items-sm-center gap-5 mb-4">
                        <div className="text jumbo home">
                                <h2 className="display-5 fw-bold"> Think About Something You Might Need! </h2>
                                <p>
                                You won't get it, but you can completely simulate how it would be to buy that product online, from ebay to even Amazon!
                                </p>
                        </div>
                        <div className="pic-ctn-lg d-flex justify-content-center">
                            <div className="big-pic-ctn">
                                <img className="big-pic" src={WishList} alt="shopping picture"/>
                                <p style={{width: '28rem', paddingTop: '0.6rem'}}>
                                    Find them in our product list, and select everythig of your liking. 
                                    Don't worry about the price ;)
                                </p>
                            </div>
                            
                            
                            <div className="small-pics-ctn d-flex flex-column gap-2">
                                <img className="small-pic ps-5" src={EmptyCart} alt="shopping picture"/>
                                <img className="small-pic pe-5" src={FullCartel} alt="shopping picture"/>
                            </div>
                            
                        </div>
                    </div>
            </div>


            {/* <div className="home-ctn-in one-col d-flex flex-column justify-content-between align-items-sm-center gap-5 mb-4">
                        <div className="text jumbo home">
                                <h2 className="display-5 fw-bold"> Don't Worry About Practilaties </h2>
                                <p>
                                We will deal with both logistics and burocracy!
                                </p>
                        </div>
                        <div className="pic-ctn-lg d-flex justify-content-center">
                            <div className="big-pic-ctn">
                                <img className="big-pic" src={Receipt} alt="shopping picture"/>
                            </div>
                            
                            
                            <div className="big-pic-ctn">
                                <img className="small-pic ps-5" src={Logistics} alt="shopping picture"/>
                                
                            </div>
                            
                        </div>
                    </div>
             */}
             <div className="home-ctn-in d-flex justify-content-around flex-sm-column flex-md-row align-items-sm-center mb-4">
                        <div className="jumbo home double-col d-flex flex-column align-items-center">
                            <div className="container-fluid py-2">
                            <h2 className="display-5 fw-bold"> Don't Worry About Practilaties </h2>
                                <p>
                                We will deal with both logistics and burocracy for you!
                                </p>
                                <NavLink to={'/us'} className="j-btn" type="button">
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>
                        <div className="pic-ctn small-pics-ctn d-flex flex-column gap-2">
                            <img src={Receipt} alt="shopping picture"/>
                            <img src={Logistics} alt="shopping picture"/>
                        </div>
                    </div>
            
            
            
        </main>
    
    )
}