import contactsData from '../../data/contactsData'
import TeamCard from '../components/cardss/TeamCard'
import DepartCard from '../components/cardss/DepartCard'
import CardLayout from '../components/cardss/CardLayout'


export default function Contacts() {
    return(
        <main className="container">
            <div className="container card-container">
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
            </div>
            

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