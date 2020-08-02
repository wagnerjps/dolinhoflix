import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import { Main } from './styles'



function PageDefault({ children }) {
    return (
        <React.Fragment>
            <Header />
            <Menu />
            <Main>
                {children}
            </Main>            
            <Footer />
        </React.Fragment>
    )
}

export default PageDefault