import contactsData from '../../data/contactsData'
import TeamCard from '../components/cardss/TeamCard'
import DepartCard from '../components/cardss/DepartCard'
import { NavLink } from 'react-router-dom'


export default function Contacts() {
    return(
        <main className="container">


            <div className="jumbo-card container p-2 pt-4 mb-1 bg-light rounded-1">
                <div className="container-fluid">
                    <h5 className="display-5 fw-bold mb-2"> Our fake contacts  </h5>
                    <p className='fst-italic'> P.S: you don't need to actually contact us</p>
                    <div className="image-container d-flex flex-column align-items-center">
                        <img src={contactsData.company.image} alt="company-picture"/>
                        <span className='fst-italic ms-5 align-self-start'>{contactsData.company.tagline}</span>
                    </div>
                    
                    <div className="contacts d-flex justify-content-between">
                        <div className="contactsInfo">
                        
                                <ul className='list-unstyled'>
                                    <li>{contactsData.contactInfo.phone}</li>
                                    <li>{contactsData.contactInfo.email}</li>
                                    <li>{contactsData.contactInfo.support}</li>
                                    <li>{contactsData.contactInfo.fax}</li>
                                </ul>
                
                        </div>
                        <div className="address">
                            <span className="d-block">{contactsData.headquarters.address}, {contactsData.headquarters.city} </span>
                            <span className='d-block'>{contactsData.headquarters.address.state}, {contactsData.headquarters.zipCode}</span> 
                            <span className='d-block'>{contactsData.headquarters.country}</span>
                            <span className='d-block'>Monday to Saturday: {contactsData.businessHours.weekdays}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <div className="container card-container">
                <div className="row">
                    <CardLayout
                    titleName={contactsData.company.name}
                    practicalInfo={<span className="d-block">{contactsData.headquarters.address}, {contactsData.headquarters.city}, {contactsData.headquarters.address.state}, {contactsData.headquarters.zipCode}, {contactsData.headquarters.country}</span>}
                    image={contactsData.company.image}
                    phone={contactsData.contactInfo.phone}
                    email={contactsData.contactInfo.email}
                    support={contactsData.contactInfo.support}
                    />
                </div>
            </div> */}
            

            <h3>Departments</h3>
            <div className="container card-container">
                <div className="row">
                    {contactsData.departments.map(item => 
                        <DepartCard name={item.name} phone={item.phone} email={item.email} key={item.id}/>
                    )}
                </div>
            </div>

            <h3>Our Team</h3>
            <div className="container card-container">
                <div className="row">
                    {contactsData.team.map(item => 
                        <TeamCard name={item.name} image={item.image} role={item.role} email={item.email} key={item.id}/>
                    )}
                </div>
            </div>
        </main>

    
)
}