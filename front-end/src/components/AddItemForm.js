import './AddItemFrom.css'
import { useRef } from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        //console.log(nameInputRef.current.value);
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = { //vasak pool peab olema sama mis backendis
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        props.onAddItem(item);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" required ref={nameInputRef}/><br />

            <label>Eseme hind</label><br />
            <input type="number" required ref={priceInputRef}/><br />

            <label>Eseme kategooria</label><br />
            <input type="text" required ref={categoryInputRef}/><br />
            <br />
            <button>Lisa uus ese!</button>
        </form>
    );
}

export default AddItemForm;