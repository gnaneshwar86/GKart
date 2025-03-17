import { createContext, useState } from 'react';
import axios from 'axios';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [log,setLog] = useState(false);
    const handleLog=()=>{
        setLog(!log);
    }
    const addItems = (id, str, categ) => {

        axios.get(`http://localhost:5000/${categ}/${id}`)
            .then((response) => {
                const item = response.data;

                if (item.count === undefined) {
                    item.count = 0;
                }

                if (str === "increment") {
                    item.count += 1;
                } else if (str === "decrement" && item.count > 0) {
                    item.count -= 1;
                }

                axios.put(`http://localhost:5000/${categ}/${id}`, item)
                    .then(() => {
                        console.log("Item updated in category.");
                    })
                    .catch((error) => {
                        console.error("Error updating item:", error);
                    });

                axios.get("http://localhost:5000/cart")
                    .then((response) => {
                        const cartData = response.data;
                        const cartItem = cartData.find((cat) => cat.id === id);

                        if (cartItem) {
                            cartItem.count = item.count;
                            if(cartItem.count === 0){
                                axios.delete(`http://localhost:5000/cart/${id}`)
                                .then(()=>{
                                    console.log("Item removed from Cart.");
                                })
                            }
                            axios.put(`http://localhost:5000/cart/${id}`, cartItem)
                                .then(() => {
                                    console.log("Item updated in Cart.");
                                })
                                .catch((error) => {
                                    console.error("Error updating item in cart:", error);
                                });
                        } else {
                            axios.post("http://localhost:5000/cart", item)
                                .then(() => {
                                    console.log("Item added to Cart.");
                                })
                                .catch((error) => {
                                    console.error("Error adding item to cart:", error);
                                });
                        }
                    })
                    .catch((error) => {
                        console.error("Error fetching cart data:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching item:", error);
            });
    };

    return (
        <ThemeContext.Provider value={{ addItems,log,setLog,handleLog }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
