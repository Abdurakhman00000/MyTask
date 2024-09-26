"use client"

import React, { useState } from 'react';
import scss from './DataList.module.scss';
import { useGetDataQuery } from '@/redux/api/data';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useBasketStore } from '@/store/useBasketStore'; 
import { toast } from "react-toastify"

const DataList = () => {
  const { data } = useGetDataQuery();
  const { addItem } = useBasketStore(); 

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  //товар издоо
  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //товарды баштыкчага кошуу
  const handleAddToCart = (item) => {
    addItem(item);
    
    //кошулганы жонундо маалымал билдируу react-toastify библиотекасы менен
    toast.success(`${item.name} добавлено в корзину!`, {
      position: 'top-right', 
      autoClose: 3000, 
    });
  };

  return (
    <section className={scss.DataList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Data_ux}>
            <h1>Все кроссовки</h1>
            <div className={scss.data_search}>
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className={scss.main_data_list}>
            {filteredData?.slice().reverse().map((item, index) => (
              <div key={index}>
                <div className={scss.data_content}>
                  <img src={item.img} alt="image" />
                  <p>{item.sneakersType}</p>
                  <h2>{item.name}</h2>
                  <div className={scss.price_block}>
                    <div className={scss.price}>
                      <span>ЦЕНА:</span>
                      <p>{item.price} руб.</p>
                    </div>

                    <div className={scss.add_block}>
                      <AddCircleOutlineIcon
                        sx={{
                          color: 'rgb(155, 155, 155)',
                          cursor: 'pointer',
                          marginTop: '20px',
                        }}
                        onClick={() => handleAddToCart({
                          id: item._id,
                          name: item.name,
                          price: item.price,
                          img: item.img,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataList;
