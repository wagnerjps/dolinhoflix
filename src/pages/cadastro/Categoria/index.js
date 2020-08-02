import React from 'react'
import PageDefault from '../../../components/PageDeafult'
import { Link } from 'react-router-dom'
import { ContainerCategoria } from './styles'

const CadastroCategoria = () => {
    return (

        <PageDefault>
            <ContainerCategoria>
                <ContainerCategoria.Title>Nova categorias</ContainerCategoria.Title>

                <ContainerCategoria.Form>

                        <ContainerCategoria.Label>
                            Nome da categoria:
                            <ContainerCategoria.Input type='text' placeholder='Nome da categoria' />
                        </ContainerCategoria.Label>

                        <ContainerCategoria.Label>
                            Descrição da categoria:
                            <ContainerCategoria.TextArea type='text' placeholder='Descrição da categoria' />
                        </ContainerCategoria.Label>

                        <ContainerCategoria.Label>
                            Descrição da categoria:
                            <ContainerCategoria.Select name="colors" id="colors">
                                <ContainerCategoria.Option value="#ADFF2F">Cores</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#000000">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#FFFFFF">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#A9A9A9">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#D3D3D3">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#191970">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#0000FF">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#00FFFF">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#006400">{' '}</ContainerCategoria.Option>
                                <ContainerCategoria.Option value="#00FF7F">{' '}</ContainerCategoria.Option>
                            </ContainerCategoria.Select>
                        </ContainerCategoria.Label>

                        <ContainerCategoria.Label>
                            Código de segurança:
                            <ContainerCategoria.Input type='text' placeholder='Código de segurança' />
                        </ContainerCategoria.Label>

                        <ContainerCategoria.Buttons>
                            <ContainerCategoria.Button backgroundColor={'#008CBA'}>Salva</ContainerCategoria.Button>
                            <ContainerCategoria.Button backgroundColor={'#9E9E9E'}>Limpar</ContainerCategoria.Button>
                        </ContainerCategoria.Buttons>
                </ContainerCategoria.Form>

                <ContainerCategoria.Table>
                    <ContainerCategoria.divTable>
                        <ContainerCategoria.divTableHeading>
                            <ContainerCategoria.divTableRow>
                                <ContainerCategoria.divTableHead>Nome</ContainerCategoria.divTableHead>
                                <ContainerCategoria.divTableHead>Descrição</ContainerCategoria.divTableHead>
                                <ContainerCategoria.divTableHead>Editar</ContainerCategoria.divTableHead>
                                <ContainerCategoria.divTableHead>Remover</ContainerCategoria.divTableHead>
                            </ContainerCategoria.divTableRow>
                        </ContainerCategoria.divTableHeading>
                        <ContainerCategoria.divTableBody>
                            <ContainerCategoria.divTableRow>
                                <ContainerCategoria.divTableCell>cell1_1</ContainerCategoria.divTableCell>
                                <ContainerCategoria.divTableCell>cell2_1</ContainerCategoria.divTableCell>
                                <ContainerCategoria.divTableCell>cell3_1</ContainerCategoria.divTableCell>
                                <ContainerCategoria.divTableCell>cell4_1</ContainerCategoria.divTableCell>
                            </ContainerCategoria.divTableRow>
                        </ContainerCategoria.divTableBody>
                    </ContainerCategoria.divTable>
                    <ContainerCategoria.divTableFooter>
                        <ContainerCategoria.outerTableFooter>
                            <ContainerCategoria.tableFootStyle>
                                <ContainerCategoria.divLinks>
                                    <a href="#">&laquo;</a>
                                    <a class="active" href="#">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">&raquo;</a>
                                </ContainerCategoria.divLinks>
                            </ContainerCategoria.tableFootStyle>
                        </ContainerCategoria.outerTableFooter>
                    </ContainerCategoria.divTableFooter>
                </ContainerCategoria.Table>



                <Link to='/'>
                    Voltar pra home
                </Link>
            </ContainerCategoria>
        </PageDefault>
        
    )
}

export default CadastroCategoria
