import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards' id='projects'>
            <h1>Personal and Academic Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/mockify.png'
                        text='"Mockify": Spotify Music App Clone built using React Native'
                        label='Personal'
                        path='https://github.com/rkOSU/Mockify'/>
                        <CardItem
                        src='images/hack.png'
                        text='HackOHIO 2020 (Hackathon) Project'
                        label='Personal'
                        path='https://github.com/kakumanus/hackohio2020'/>
                        <CardItem
                        src='images/todo.png'
                        text='To-Do List built using React'
                        label='Personal'
                        path='https://github.com/rkOSU/ToDo-Using-React'/>
                        
                        
                        
                        
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/amazon.jpg'
                        text='Amazon Price Tracker written in Python'
                        label='Personal'
                        path='https://github.com/rkOSU/Price-Tracker'/>
                        <CardItem
                        src='images/py.png'
                        text='Game of Python - Snake written in Python'
                        label='Personal'
                        path='https://github.com/rkOSU/Game-Of-Python'/>
                        <CardItem
                        src='images/chip.png'
                        text='CHIP-8 Emulator written in C++ (In-Progress)'
                        label='Personal'
                        path='https://github.com/rkOSU/Chip-8'/>
                        <CardItem
                        src='images/quandary.png'
                        text='Quandary Language Interpreter written in Java'
                        label='Academic'
                        path='https://github.com/rkOSU/3341-Public'/>

                        
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
