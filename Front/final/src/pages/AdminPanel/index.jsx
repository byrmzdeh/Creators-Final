import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { Helmet } from 'react-helmet'

const AdminPanel = () => {
  return (
    <div className='adminpanel'>
      <Helmet>
        <title>Admin Panel</title>
        <link
          rel="icon"
          href="https://cdn4.iconfinder.com/data/icons/admin-panel-3/614/640_-_Admin_Roles-512.png"
        />
      </Helmet>
      <h1>Admin Panel</h1>
      <button><Link to={'/cardsPanel'}>Cards Panel</Link></button>
      <button><Link to={'/usersPanel'}>Users Panel</Link></button>
    </div>
  )
}

export default AdminPanel
