import CardLayout from "../cards/CardLayout";

export default function TeamCard({name, role, image, email}) {
    return(
        <CardLayout titleName={name} practicalInfo={role} image={image} email={email}/>
    )
}