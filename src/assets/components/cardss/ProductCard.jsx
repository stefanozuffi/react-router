import CardLayout from "./CardLayout"

export default function ProductCard({title, price, image}) {
    return (
        <CardLayout 
            titleName={title} 
            practicalInfo={`$${price}`} 
            image={image}
            bs_sm={12}
            bs_md={6}
            bs_lg={4}
        />
    )
}