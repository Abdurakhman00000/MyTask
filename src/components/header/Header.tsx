"use client"

import React from 'react'
import scss from "./Header.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useBasketStore } from '@/store/useBasketStore';

const Header = () => {
    const { openCart } = useBasketStore();
  return (
    <header className={scss.Header}>
        <div className="container">
            <div className={scss.content}>
                <div className={scss.Logo}>
                    <img src="https://png.pngtree.com/template/20200809/ourmid/pngtree-modern-sneaker-shoe-logo-image_401564.jpg" alt='img'/>
                    <div className={scss.Logo_info}>
                        <h1>KROSS STORE</h1>
                        <h3>Магазин лучших кроссовок</h3>
                    </div>
                </div>

                <div className={scss.Header_ui}>
                    <div className={scss.Header_basket} onClick={openCart}>
                        <ShoppingCartIcon sx={{color: "rgb(155, 155, 155)", cursor: "pointer"}}/>
                        <p>Корзина</p>
                    </div>
                    <div className={scss.Header_favorites}>
                        <FavoriteBorderIcon sx={{color: "rgb(155, 155, 155)", cursor: "pointer"}}/>
                        <p>Закладки</p>
                    </div>
                    <div className={scss.Header_profile}>
                        <AccountCircleIcon sx={{color: "rgb(155, 155, 155)", cursor: "pointer"}}/>
                        <p>Профиль</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header