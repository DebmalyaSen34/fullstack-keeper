import React from 'react';
import axios from 'axios';
import BasicCard from '../components/SmallNote';
import { useNavigate } from 'react-router-dom';

function Restaurants() {
    const navigate = useNavigate();

    const [restaurants, setRestaurants] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:5000/getRestaurants')
        .then(response => setRestaurants(response.data))
        .catch(err => console.error(err));

        document.body.style.backgroundColor = "black";
    }, []);

    const handleClick = (id) => {
        navigate(`/restaurants/${id}`);
    }

    return (
        <div>
            <h1 style={{color: 'white'}}>Restaurants</h1>
            {restaurants.map(restaurant => (
                <div onClick={() => handleClick(restaurant._id)}  key={restaurant._id}>
                <BasicCard title={restaurant.name} content={restaurant.about} tag="dine-in" author={restaurant.address} />
                </div>
            ))}
        </div>
    )
}

export default Restaurants