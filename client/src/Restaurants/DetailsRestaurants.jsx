import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailsRestaurants() {

    const { id } = useParams();
    const [restaurant, setRestaurant] = React.useState(null);
    const [cart, setCart] = React.useState([]);

    const addItemToCart = (item) => {
        setCart(currentCard => [...currentCard, item]);
    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(err => {
                console.error("There was an error getting the restaurant details:", err);
            });
    }, [id]);

    if (!restaurant) return <div>loading...</div>;

    const { veg, nonveg } = restaurant.menu;

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.about}</p>
            <p>{restaurant.address}</p>
            <ul>Menu:
                {veg.map(item => (
                    <li>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {item}
                            <div style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => addItemToCart(item)}>add</div>
                        </div>

                    </li>
                ))}
                {nonveg.map(item => (
                    <li>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {item}
                            <div style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => addItemToCart(item)}>add</div>
                        </div>

                    </li>
                ))}
            </ul>
            <div>
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DetailsRestaurants