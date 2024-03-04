import React from 'react'
import Question from '../../components/Question'
import {Helmet} from "react-helmet";


const Faq = () => {
  return (
    <div>
      <Helmet>
        <title> FAQ</title>
        <link
          rel="icon"
          href="https://static.thenounproject.com/png/545270-200.png"
        />
      </Helmet>

      <Question />

    </div>
  )
}

export default Faq
