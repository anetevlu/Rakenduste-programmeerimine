import { Link } from 'react-router-dom';

function Item(props) {
    function handleDelete(itemId){
        props.deleteItem(itemId);
    }


    return (
        <div className="item/">
            { props.isSingleItemView ? <div>
                <div className="itemName">{props.name}</div>
                <div className="itemPrice">{props.price}</div>
                <div className="itemCategory">{props.category}</div>
            </div> :
                <Link to={`item/${props.id}`}>
                    <div className="itemName">{props.name}</div>
                    <div className="itemPrice">{props.price}</div>
                    <div className="itemCategory">{props.category}</div>
                </Link>
            }            
            { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
                    <div>
                        <button onClick={() => handleDelete(props.id)}>X</button> 
                        <button>Muuda toodet</button>
                    </div> 
            }
        </div>
    )
}

export default Item;