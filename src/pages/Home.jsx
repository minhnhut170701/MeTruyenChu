import React from 'react'
import Banner from '../components/HomePage/Banner/Banner'
import Caterogy from "../components/HomePage/Category/CategoryNovel"
import ListBook from '../components/HomePage/ListBook/ListBook'
import Nav from '../components/HomePage/NavBar/Nav'
import HotBook from '../components/HomePage/HotBook/Hot'
import NewNovel from '../components/HomePage/NewBook/NewNovel'
import BookUpdate from '../components/HomePage/BookUpdate/BookUpdate'
import Footer from '../components/HomePage/Footer/Footer'
import FinishBook from '../components/HomePage/FinishBook/FinishBook'

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <ListBook />
        <Caterogy />
        <FinishBook />
        <NewNovel />
        <BookUpdate />
        <Footer />
    </div>
  )
}

export default Home