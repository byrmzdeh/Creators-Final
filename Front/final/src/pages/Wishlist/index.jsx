import React from 'react'
import WishlistCards from '../../components/WishlistCards'
import NewWishlist from '../../components/NewWishlist'
import { Helmet } from 'react-helmet'

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
