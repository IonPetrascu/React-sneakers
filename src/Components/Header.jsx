import React from 'react'

function Header() {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width='40' height='40' src="/img/logo.png" />
                <div className='ml-15'>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p className='opacity-5'>Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li className='d-flex mr-30 align-center'>
                    <img className='mr-10' width='18' height='18' src="/img/Cart.svg" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width='18' height='18' src="/img/User.svg" />
                </li>
            </ul>
        </header>
    )
}

export default Header