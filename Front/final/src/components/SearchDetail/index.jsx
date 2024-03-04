import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContex'

const SearchDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    // const {addBasket} = useContext(BasketContext)



    useEffect(() => {
        fetch('http://localhost:3600/cards')
            .then((res) => res.json())
            .then((api) => {
                const itemDetail = api.find((x) => x._id === id)
                setDetail(itemDetail)
            })
    }, [])


    return (
        <div className="shopDetail">
            <img  src={detail.image} alt="" />
            <div className="writes">
                <h1>Name : {detail.name}</h1>
                <h1>Price : {detail.discount} $</h1>
                {/* <button onClick={addBasket(detail)}>Add To Cart</button> */}
            </div>
        </div>
    )
}

export default SearchDetail
