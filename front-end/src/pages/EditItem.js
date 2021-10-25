import { useState, useEffect, useRef } from 'react';


function EditITem(){
    const [ item, setItem ] = useState(null);

    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    useEffect(() => {
        const itemId = window.location.href.split("/edit-item/")[1];
        fetch("http://localhost:8080/view-item/" + itemId).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setItem(data);
        })
    }, [])
    
    if(!item){
        return "Loading..."
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const itemSubmitted = { 
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        fetch('http://localhost:8080/edit-item', {
        method: 'POST',    
        body: JSON.stringify(itemSubmitted),
        headers: {
            'Content-type':'application/json'
        }
        });
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" required defaultValue={item.name} ref={nameInputRef}/><br />

            <label>Eseme hind</label><br />
            <input type="number" required defaultValue={item.price} ref={priceInputRef}/><br />

            <label>Eseme kategooria</label><br />
            <input type="text" defaultValue={item.category} required  ref={categoryInputRef}/><br />
            <br />
            <button>Muuda eset</button>
        </form>)
}

export default EditITem;