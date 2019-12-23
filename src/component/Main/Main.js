import React, { useState } from 'react'
import './style.css'
import { Nav } from '../Nav/index'
import {data} from '../data.json'
const Maindump = {
    img: 'http://img.danawa.com/prod_img/500000/779/124/img/7124779_1.jpg?shrink=500:500&_v=20190125144854',
    title: '원목 접이식 테이블',
    company: '한샘 HANSSEM'
}

const dump1 = data.slice(0, 10)
const dump2 = data.slice(10, 20)

export const Main = () => {
    const [more1, setMore1] = useState(true)
    const [more2, setMore2] = useState(true)
    return (
        <div className = "Main">
            <Nav/>
            <div className = "MainImg">
                <div className = "darkMask"/>
                <img src = {Maindump.img} className = "MainInImg"/>
                <p className = "TCompany mainC">{Maindump.company}</p>
                <p className = "TTitle mainT">{Maindump.title}</p>
            </div>
            <div className = "topBox">
                <p className = "top">TOP 10 가구</p>
                <div style = {{flex: 1}}/>
                <p className = "more" onClick = { () => {
                    setMore1(!more1)
                }}>더보기</p>
            </div>
            { more1 ? (
                <div className = "itemList">
                    <Item img = { dump1[0].img } price = { dump1[0].price} title = { dump1[0].title } company = { dump1[0].company } key = {['asdasd1']} type = "1" num = { 0 }/>
                    <Item img = { dump1[1].img } price = { dump1[1].price} title = { dump1[1].title } company = { dump1[1].company } key = {['asdasd2']} type = "1" num = { 1 }/>
                </div>
            ) : (
                <div className = "itemList">
                {dump1.map ( (contact, i) => {
                    return <Item img = { contact.img } price = { contact.price} title = { contact.title } company = { contact.company } key = {i} type = "1" num = { i }/>
                })}
                </div>
            )}
            <div className = "topBox">
                <p className = "top">TOP 10 인테리어</p>
                <div style = {{flex: 1}}/>
                <p className = "more"onClick = { () => {
                    setMore2(!more2)
                }}>더보기</p>
            </div>
            { more2 ? (
                <div className = "itemList" style = {{marginBottom : '3vw'}}>
                    <Item img = { dump2[0].img } price = { dump2[0].price} title = { dump2[0].title } company = { dump2[0].company } key = {['asdasd3']} type = "2" num = { 0 }/>
                    <Item img = { dump2[1].img } price = { dump2[1].price} title = { dump2[1].title } company = { dump2[1].company } key = {['asdasd4']} type = "2" num = { 1 }/>
                </div>
            ) : (
                <div className = "itemList" style = {{marginBottom : '3vw'}}>
                {dump2.map ( (contact, i) => {
                    return <Item img = { contact.img } price = { contact.price} title = { contact.title } company = { contact.company } key = {i} type = "2" num = { i } />
                })}
                </div>
            )}
        </div>
    )
}
const Item = props => {
    function goLink () {
        let go = props.num;
        if ( props.type === "2") go = go + 10;
        return window.location.href = `/item/${go}`
    }
    return (
        <div style = {{backgroundImage : `url(${props.img})`}} className = "item" onClick = { () => goLink() }>
            <div className = "darkMask" style = {{borderRadius : '2vw', opacity: '0.4'}}/>
            <p className = "TCompany mainCC">{props.company}</p>
            <p className = "TTitle mainTT">{props.title}</p>
            <p className = "price">{props.price}</p>
        </div>
    )
}