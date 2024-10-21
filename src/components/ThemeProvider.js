import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ThemeContext = createContext(); 

const ThemeProvider = ({ children }) => {

    const addItems = (id, str, categ) => {
        axios.get(`http://localhost:5000/${categ}/${id}`)
            .then((response) => {
                let item = response.data;
                if (str === "increment") {
                    item.count += 1;
                } else if (str === "decrement" && item.count > 0) {
                    item.count -= 1;
                }
                axios.put(`http://localhost:5000/${categ}/${id}`, item)

                axios.get(`http://localhost:5000/cart/${id}`)
                    .then((cartResponse) => {
                        if (cartResponse.data) {
                            axios.put(`http://localhost:5000/cart/${id}`, item)
                        } else {
                            axios.post("http://localhost:5000/cart", item)
                        }
                    })
            })
            .catch((error) => {
                console.error('Error updating item:', error);
            });
    };


    return (
        <ThemeContext.Provider value={{ addItems }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
