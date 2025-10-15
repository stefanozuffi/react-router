export default function CardLayout({titleName, image, practicalInfo, email}) {
   return (<div className="col col-sm-6 col-md-4 col-lg-4 mb-3">
            <div className="card h-100">
                <h5>{titleName}</h5>
                {image ? <img src={image} alt="product-image"/> : null}
                <div className="card-body">
                    <span className="d-block">{practicalInfo}</span>
                    {email ? <span>{email}</span> : null}
                    <span>{email}</span>
                </div>
            </div>
        </div>)
}