import { Link } from "react-router-dom"

export default function FixedHeader() {
    return(
        <div className="header d-flex justify-content-around align-items-center p-3">
                <h4>The Fake E-Commerce</h4>
                <nav className="d-flex gap-5">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/us'> Contacts</Link>
                </nav>
        </div>
    )
}