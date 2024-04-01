import { useState, useEffect, useMemo } from 'react';
import type { bagItem } from '../types';

export const useBag = () => {

    const initialBag = () => {
      const localStorageBag = localStorage.getItem('bag')
      return localStorageBag ? JSON.parse(localStorageBag) : []
    }

    const [data, setData] = useState([]);
    const [bag, setBag] = useState<bagItem[]>(initialBag)

    const MAX_PRODUCTS = 10;
    const MIN_PRODUCTS = 1;
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setData(data));
  }, []);

    useEffect(() => {
      localStorage.setItem('bag', JSON.stringify(bag))
    }, [bag])

    function addToBag(item : bagItem){
      const itemExists = bag.findIndex(product => product.id == item.id)
      
      if (itemExists < 0){
          const newItem : bagItem = {...item, quantity: item.quantity = 1}
          setBag([...bag, newItem])
      }
      else {
          if (bag[itemExists].quantity >= MAX_PRODUCTS) return
          const updatedBag = [...bag]
          updatedBag[itemExists].quantity++
          setBag(updatedBag)
      }
      
    }

    function removeFromBag (id : bagItem['id']) {
      setBag(prevBag => prevBag.filter(product => product.id !== id))
    }

    function increaseQuantity (id : bagItem['id']) {
      const updatedBag =  bag.map(product =>{
        if(product.id === id && product.quantity < MAX_PRODUCTS){      
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      return product
      })
      setBag(updatedBag)
    }

    function decreaseQuantity (id : bagItem['id']) {
      const updatedBag =  bag.map(product =>{
        if(product.id === id && product.quantity > MIN_PRODUCTS){      
        return {
          ...product,
          quantity: product.quantity -1
        }
      }
      return product
      })
      setBag(updatedBag)
    }

    function clearBag(){
      setBag([])
    }

    const bagTotal = useMemo(() => bag.reduce( (total, product) => total + (product.price * product.quantity), 0), [bag] )
    const isEmpty = useMemo(() => bag.length === 0, [bag])      
      
    return {
      data,
      bag,
      addToBag,
      clearBag,
      removeFromBag,
      decreaseQuantity,
      increaseQuantity,
      isEmpty,
      bagTotal
    }
}