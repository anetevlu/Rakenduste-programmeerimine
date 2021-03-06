import { Link } from 'react-router-dom';
import CategoryList from "../components/CategoryList"; 
import { useState, useEffect } from 'react';

function Categories(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return(
    <div>
        <h1>Kategooriad</h1>
        <CategoryList categories={loadedCategories} />
        
        <Link to="add-category">
            <button>Lisa uus kategooria</button>
        </Link>
        
       
    </div>
    );
}

export default Categories;