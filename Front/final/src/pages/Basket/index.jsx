import React from 'react'
import BasketCards from '../../components/BasketCards'
import NewBasket from '../../components/NewBasket'
import { Helmet } from 'react-helmet'

const Basket = () => {
  return (
    <div>
      <Helmet>
        <title>Basket</title>
        <link
          rel="icon"
          href="https://purepng.com/public/uploads/large/purepng.com-shopping-basketshoppingcarttrolleycarriagebuggysupermarketsbasket-1421526532727qjew3.png"

        />
      </Helmet>
      <NewBasket />
      <BasketCards />

    </div>
  )
}

export default Basket
