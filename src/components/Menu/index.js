import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/dolinhoflix-sf.png'
import './Menu.css'
import Button from '../../components/Button'
//import ButtonLink from '../components/ButtonLink'

const Menu = () => {
    return(
        <nav className='Menu'>
            <Link to='/'>
                <img src={Logo} className='Logo' alt='DolinhoFlix' />
            </Link>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo Vídeo
            </Button>
            
            {/* <ButtonLink className={ButtonLink} href='/'>
                Novo Vídeo
            </ButtonLink> */}
            
        </nav>
    )
}

export default Menu