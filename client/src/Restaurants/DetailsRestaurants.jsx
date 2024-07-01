import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingPage from '../components/LoadingPage';
import { Box, Button } from '@mui/material';

function DetailsRestaurants() {

    const { id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [restaurant, setRestaurant] = React.useState([]);
    const [cart, setCart] = React.useState([]);

    const addItemToCart = (itemName) => {
        const itemIndex = cart.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            const newCart = cart.map((item, index) => {
                if (index === itemIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { name: itemName, quantity: 1 }]);
        }
    }

    const removeFromCart = (itemName) => {
        const itemIndex = cart.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            if (cart[itemIndex].quantity > 1) {
                const newCart = cart.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                setCart(newCart);
            }else{
                const newCart = cart.filter((_, index) => index !== itemIndex);
                setCart(newCart);
            }
        }
    }

    const handleCheckout = () => {
        axios.post(`http://localhost:5000/checkout/${id}`, {cart}, {
            withCredentials: true,
        })
        .then(result => {
            if(result.status === 200){
                console.log(result);
                console.log('checkout successfully sent');
            }
        })
        .catch(err => {
            if(err.response && err.response.status === 401){
                console.log(err.response.data.message);
            }else{
                console.log(err.message);
            }
        })
    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("There was an error getting the restaurant details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <LoadingPage />;

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
                        <li key={index}>
                            {item.name} - Quantity: {item.quantity}
                            <div style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => removeFromCart(item.name)}>-</div>
                        </li>
                    ))}
                </ul>
            </div>
            <Box component='form' method='POST'>
                    <Button type='submit' variant='contained' onClick={handleCheckout}>Checkout</Button>
            </Box>
        </div>
    )
}

export default DetailsRestaurants