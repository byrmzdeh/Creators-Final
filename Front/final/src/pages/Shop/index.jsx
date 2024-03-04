import React from 'react'
import ShopCards from '../../components/ShopCards'
import Cursor from '../../components/Cursor'
import NewShop from '../../components/ShopNew'
import { Helmet } from 'react-helmet'

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Shop</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2435/2435292.png"
        />
      </Helmet>
      <NewShop />
      <ShopCards />
      <Cursor />

    </div>
  )
}

export default Shop
