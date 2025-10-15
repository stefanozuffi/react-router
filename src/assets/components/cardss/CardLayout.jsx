export default function CardLayout({titleName, image, practicalInfo, email, phone, support}) {
    return (
        <div className="col col-sm-6 col-md-4 col-lg-4 mb-3">
            <div className="card h-100">
                <h5>{titleName}</h5>
                {image && <img src={image} alt="product-image"/>}
                <div className="card-body">
                    <span className="d-block">{practicalInfo}</span>
                    {email && <span className="d-block">Email: {email}</span>}
                    {phone && <span className="d-block">Phone: {phone}</span>}
                    {support && <span className="d-block">Support: {support}</span>}
                </div>
            </div>
        </div>
    )
 }