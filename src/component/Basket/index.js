import React from 'react'
import './style.css'

export const Basket = () => {
    return (
        <div className = "basketPage">
            <button className = "ar" onClick = { () => {
                return window.location.href = '/'
            }}>쇼핑하러 가기</button>
            <p className ="nonText">장바구니에 아무 것도 존재하지 않습니다.</p>
            <div className = "nonImg"></div>
        </div>
    )
}