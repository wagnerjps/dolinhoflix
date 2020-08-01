import React from 'react'
import Logo from '../../assets/img/dolinhoflix-sf.png'
import './Menu.css'
import Button from '../../components/Button'
//import ButtonLink from '../components/ButtonLink'

const Menu = () => {
    return(
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} className='Logo' alt='DolinhoFlix' />
            </a>
            <Button as="a" href='/'>
                Novo Vídeo
            </Button>
            {/**
            <ButtonLink className={ButtonLink} href='/'>
                Novo Vídeo
            </ButtonLink>
             */}
        </nav>
    )
}

export default Menu