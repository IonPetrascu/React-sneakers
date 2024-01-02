import React from 'react'
import EmptyCart from './EmptyCart'

function Driwer({ onClose, items = [], onRemoveItem }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className=' mb-30 justify-between d-flex'>Корзина <img onClick={onClose} className='removeBtn cu-p' src="/img/btn-remove.svg" alt="Remove" /></h2>
                {items.length > 0 ?
                    <>
                        <div className='items'>
                            {items.map((item) => (<div className="cartItem d-flex align-center mb-20">
                                <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cardItemImg ">
                                </div>
                                <div className='mr-20 '>
                                    <p className='mb-5'>{item.name}</p>
                                    <b >{item.price} руб.</b>
                                </div>
                                <img onClick={() => onRemoveItem(item.id)} className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
                            </div>))}
                        </div>
                        <div className='cartTotalBlock'>
                            <ul >
                                <li >
                                    <span>Итого</span>
                                    <div></div>
                                    <b>21 498 руб</b>
                                </li>
                                <li >
                                    <span>Налог 5%</span>
                                    <div></div>
                                    <b>1074 руб</b>
                                </li>
                            </ul>
                            <button className='greenButton'>Оформить заказ<img src="./img/arrow.svg" alt="arrow" /></button>
                        </div>
                    </> : <EmptyCart onClose={onClose} />
                }

            </div>
        </div>
    )
}

export default Driwer