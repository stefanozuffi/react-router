import CardLayout from "./CardLayout"

export default function ProductCard({title, price, image}) {
    return (
        <CardLayout 
            titleName={title} 
            practicalInfo={`$${price}`} 
            image={image}
        />
    )
}