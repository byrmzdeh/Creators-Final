import React from 'react'
import { Helmet } from 'react-helmet'
import NewWishlist from '../../components/NewWishlist'
import WishlistCards from '../../components/WishlistCards'

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/4689/4689880.png"
        />
      </Helmet>
      <NewWishlist />
      <WishlistCards />
    </div>
  )
}

export default Wishlist
