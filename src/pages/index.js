import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Home (props) {
  return (
    <>
      <Helmet>
        <title>React Helmet Debug</title>
        <script src='/hello.js' type='text/javascript' />
      </Helmet>
      <h1>React Helmet Debug</h1>
      <Link to='/beep'>Beep</Link>
    </>
  )

}
