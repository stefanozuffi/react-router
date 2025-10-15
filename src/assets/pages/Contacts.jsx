import contactsData from '../../data/contactsData'
import TeamCard from '../components/Cards/TeamCard'
import DepartCard from '../components/Cards/DepartCard'
import CardLayout from '../components/../components/cards/CardLayout'

export default function Contacts() {
    return(
        <main className="container">
            <h3>The Fake E-Commerce Ltd.</h3>
            <CardLayout
            titleName={contactsData.company.name}
            phone={contactsData.contactInfo.phone}
            email={contactsData.contactInfo.email}
            support={contactsData.contactInfo.support}
            />

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