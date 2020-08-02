import React from 'react'
import PageDefault from '../../../components/PageDeafult'
import { Link } from 'react-router-dom'

const CadastroVideo = () => {
    return (

        <PageDefault>
            <h1>Cadastro de video</h1>

            <Link to='/cadastro/categoria'>
                Cadastror Categoria
            </Link>
        </PageDefault>
        
    )
}

export default CadastroVideo
