import React from 'react'
import Card from './Components/Card'
import Header from './Components/Header'
import Driwer from './Components/Driwer'

function App() {
    return (
        <div className='wrapper clear'>
            <Driwer />
            <Header />
            <div className='content p-40'>
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder='Поиск...' />
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        </div>
    )
}

export default App