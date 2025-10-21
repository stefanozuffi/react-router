import { NavLink } from "react-router-dom"

export default function FixedHeader() {
    return(
        <div className="header d-flex justify-content-around align-items-center p-3">
                <h4>The Fake<br></br> E-Commerce</h4>
                <nav className="d-flex flex-sm-column flex-md-row gap-3">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/us'> Contacts</NavLink>
                </nav>
        </div>
    )
}