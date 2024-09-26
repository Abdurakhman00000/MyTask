"use client";
import React, { useEffect } from 'react';
import scss from './Basket.module.scss';
import { useBasketStore } from '@/store/useBasketStore';

const Basket = () => {
  // зуштандан абалды алуу (состояние)
  const { isOpen, closeCart, cartItems, removeItem, setCartItems } = useBasketStore();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedItems = JSON.parse(storedCartItems);
      setCartItems(parsedItems); 
    }
  }, [setCartItems]);

  //Товар жалпы суммасын эсептоо функциясы
  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.price); 
      return !isNaN(price) ? sum + price : sum; 
    }, 0);
  };

  return (
    isOpen && (
      <div className={scss.cartModalOverlay}>
        <div className={scss.cartModal}>
          <h2>Корзина</h2>
          <button onClick={closeCart} className={scss.closeBtn}>X</button>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className={scss.cartItem}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price} руб.</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className={scss.removeBtn}>x</button>
                </div>
              ))}

              <div className={scss.mainTotal}>
              <div className={scss.TotalPrice}>
                <div className={scss.Price}>
                <h3>Итого:</h3>
                <p>{getTotalPrice().toLocaleString()} руб.</p> 
                </div>
                <button>Оформить заказ</button>
              </div>
              </div>
            </>
          ) : (
            <div className={scss.non_basket}>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS81wQet2azoKxTbMAKF6cCj7i2VrNd1FflTe-V8CSoyv92tyuL" alt="" />
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару <br /> кроссовок, чтобы сделать заказ.</p>
              <button onClick={closeCart}>Вернуться назад</button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Basket; 
