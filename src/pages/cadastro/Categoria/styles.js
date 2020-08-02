import styled from 'styled-components'

export const ContainerCategoria = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    height: 100%;
    z-index: 10;
    text-align: center;

    @media (max-width: 800px) {
        padding-top: 100px;
        flex-direction: column;
    }
`
ContainerCategoria.Title = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 32px;
    align-self: stretch;

    @media (max-width: 800px) {
        font-size: 32px;
        text-align: center;
    }
`;

ContainerCategoria.Form = styled.form`
margin-left: 5%;
margin-right: 5%;
text-align: left;
@media (max-width: 800px) {
  font-size: 32px;
  text-align: center;
}
`;

ContainerCategoria.Label = styled.div`
    width: 100%;
    font-style: normal;
    font-size: 16px;
    margin: 20px 0;
    
@media (max-width: 800px) {
  font-size: 32px;
  text-align: center;
}
`

ContainerCategoria.Input = styled.input`
    width: 100%;

    font-size: 16px;

    box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	padding: 10px;
    outline: none;
    
    ::-webkit-input-placeholder { color: rgba(0, 0, 0, 0.3); }
    ::-moz-placeholder { color: rgba(0, 0, 0, 0.3); }
    :-ms-input-placeholder { color: rgba(0, 0, 0, 0.3); }
    :-moz-placeholder { color: rgba(0, 0, 0, 0.3); }
    
@media (max-width: 800px) {
  font-size: 32px;
  text-align: center;
}
`

ContainerCategoria.Select = styled.select`
    width: 100%;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.3);

    box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	padding: 10px;
    outline: none;
    

    ::selection {
        background: ${({ value }) => `${ value }`} !important;
    }
    
@media (max-width: 800px) {
    
    font-size: 32px;
    text-align: center;
}
`

ContainerCategoria.Option = styled.option`
    margin: 40px;
    background-color: ${({ value }) => `${ value }`} !important;   
`

ContainerCategoria.TextArea = styled.textarea`
    width: 100%;
    height: 6em;

    font-size: 16px;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: 1px solid #C2C2C2;
    box-shadow: 1px 1px 4px #EBEBEB;
    -moz-box-shadow: 1px 1px 4px #EBEBEB;
    -webkit-box-shadow: 1px 1px 4px #EBEBEB;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    padding: 10px;
    outline: none;

    ::-webkit-input-placeholder { color: rgba(0, 0, 0, 0.3); }
    ::-moz-placeholder { color: rgba(0, 0, 0, 0.3); }
    :-ms-input-placeholder { color: rgba(0, 0, 0, 0.3); }
    :-moz-placeholder { color: rgba(0, 0, 0, 0.3); }

@media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
}
`

ContainerCategoria.Buttons = styled.div`
    margin: 10px 0;
`

ContainerCategoria.Button = styled.button`
    /*  */
    background-color: ${({ backgroundColor }) => `${backgroundColor}`};
    margin-right: 10px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 12px 18px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    display: inline-block;
    transition: opacity .3s;

@media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
}
`



ContainerCategoria.Table  = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    display: table;
    border: 1px solid #8E8E8E;
    background-color: #000;
    text-align: left;
`

ContainerCategoria.divTable  = styled.div`
    width: 100%;
    display: table;
`

ContainerCategoria.divTableHeading  = styled.div`
    display: table-header-group;
    background: #D3D3D3;
    background: -moz-linear-gradient(top, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
    background: -webkit-linear-gradient(top, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
    background: linear-gradient(to bottom, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
`

ContainerCategoria.divTableRow  = styled.div`
    display: table-row;
`

ContainerCategoria.divTableBody  = styled.div`
    display: table-row-group;
`

ContainerCategoria.divTableHead  = styled.div`
    display: table-cell;
    border: 1px solid #A9A9A9;
    padding: 8px 14px;
    font-size: 15px;
    font-weight: bold;
    color: #5E5E5E;
    text-align: center;
`

ContainerCategoria.divTableCell  = styled.div`
    display: table-cell;
    border: 1px solid #A9A9A9;
    padding: 8px 14px;
    font-size: 13px;
    color: #FFF;
    text-align: left;
`

ContainerCategoria.divTableFooter  = styled.div`
    display: table-footer-group;
`

ContainerCategoria.outerTableFooter  = styled.div`
    border-top: none;
`

ContainerCategoria.tableFootStyle  = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #5E5E5E;
    background: #D3D3D3;
    background: -moz-linear-gradient(top, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
    background: -webkit-linear-gradient(top, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
    background: linear-gradient(to bottom, #dedede 0%, #d7d7d7 66%, #D3D3D3 100%);
    padding: 3px 5px;
`

ContainerCategoria.divLinks  = styled.div`
    text-align: right;  
`