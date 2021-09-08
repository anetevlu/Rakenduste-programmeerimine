function Item(props) {
    return (
        <div>
            <div clasSName="itemName">{props.name}</div>
            <div clasSName="itemPrice">{props.price}</div>
            <div clasSName="itemCategory">{props.category}</div>
        </div>
    )
}

export default Item;