import React from 'react'
import BasketProvider from './BasketContex'
import WishlistProvider from './WishlistContext'
import UserProvider from './UserContext'
import { SearchProvider } from './SearchContext'

const MainLayoutContext = ({ children }) => {
  return (
    <UserProvider>
      <SearchProvider>
        <BasketProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </BasketProvider>
      </SearchProvider>
    </UserProvider>
  )
}

export default MainLayoutContext
