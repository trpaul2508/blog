import React from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout'

type Props = {}

const Home = (props: Props) => {
  return <div>Welcome to home</div>
}

Home.Layout = DefaultLayout
Home.data = 'test data'

export default Home
