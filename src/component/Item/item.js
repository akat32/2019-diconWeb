import React, { useState } from 'react'
import './style.css'
import { data } from '../data.json'
import { useParams } from 'react-router-dom'

// import { Nav } from '../Nav/index'

export const ItemPage = () => {
    const [ itemInfo, setItemInfo ] = useState(data[parseInt(useParams().num)])
    return (
        <div className = "itemPage">
            <div className = "MainImg">
                <dic className = "darkMask"/>
                <img src = {itemInfo.img} className = "MainInImg"/>
            </div>
            <div className = "innerInfo">
                <p className = "cc">{itemInfo.company}</p>
                <div style = {{display: 'flex', alignItems: 'flex-end', marginBottom: '4vh'}}>
                    <p className = "tt">{itemInfo.title}</p>
                    <div style = {{flex : 1}}/>
                    <p className = "pp">{itemInfo.price}</p>
                </div>
                <p className = "tmi">{itemInfo.description}</p>
            </div>
            <button className = "ar">가상으로 배치하기</button>
        </div>
    )
}