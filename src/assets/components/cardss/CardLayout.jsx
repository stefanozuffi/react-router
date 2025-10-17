import { NavLink } from "react-router-dom"

export default function CardLayout({titleName, image, practicalInfo, email, phone, support, bs_sm, bs_md, bs_lg}) {
    return (
        <div className={`col col-sm-${bs_sm} col-md-${bs_md} col-lg-${bs_lg} mb-3`}>
            <NavLink to='/' className="card d-flex justify-content-around companyCard h-100">
                <h5>{titleName}</h5>
                {image && <img src={image} alt="card-image"/>}
                <div className="card-body">
                    {practicalInfo ? <span className="d-block"> {practicalInfo}</span> : null}
                    {email ? <span className="d-block">Email: {email}</span> : null}
                    {phone ? <span className="d-block">Phone: {phone}</span> : null}
                    {support ? <span className="d-block">Support: {support}</span> : null}
                </div>
            </NavLink>
        </div>
    )
 }