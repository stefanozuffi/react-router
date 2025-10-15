import CardLayout from "../cards/CardLayout";

export default function DepartCard({name, phone, email}) {
    return(
        <CardLayout titleName={name} practicalInfo={phone} email={email}/>
    )
}