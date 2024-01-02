import React from 'react'

function EmptyCart({ onClose }) {
    return (
        <div className='empty-cart'>
            <h3>Пустая корзина</h3>
            <img src="/img/emptyCart.png" alt="cart" />
            <button onClick={() => onClose()} className='greenButton'>Вернуться обратно</button>
        </div>
    )
}

export default EmptyCart