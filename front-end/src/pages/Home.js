import ItemList from "../components/ItemList";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    }, [])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <br />
            <Link to="add-item">
                <button className="add-item-button">Lisa uus item</button>
            </Link>
            <ItemList items={loadedItems} />
        </div>
    )
}

export default Home;