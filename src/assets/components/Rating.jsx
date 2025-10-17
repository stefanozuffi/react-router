import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";


export default function Rating({rating}) {
    const fullStars = Math.floor(parseFloat(rating))
    const halfStar = parseFloat(rating) % 1 >= 0.5

    return (
        <div className="stars-ctn">
            {
                [...Array(5)].map((_,i) => {
                    if (i<=fullStars) {
                        return (<FaStar key={`full-${i}`}/>)
                    } else if (i === fullStars && halfStar) {
                        return(<FaStarHalf key={'half'}/>)
                    } else {
                        return(<FaRegStar key={`empty-${i}`}/>)
                    }
                })
            }
        </div>
    )
    

    
}