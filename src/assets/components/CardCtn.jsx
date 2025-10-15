export default function CardCtn({list, Card, card_props}) {

    return(
            
            <div className="container">
                <div className="row">
                    {list.map(item => 
                        <Card 
                            title={item[card_props.title]} 
                            image={item[card_props.image]} 
                            price={item[card_props.price]} 
                            key={item[card_props.id]} 
                        />
                    )}
                </div>
            </div>
            
              
    
        )
}