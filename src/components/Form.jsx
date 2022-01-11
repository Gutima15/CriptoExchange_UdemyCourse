import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {currency} from "../data/currency";
import useSelectCurrency from "../hooks/useSelectCurrency";
import Error from './Error'


//Style BEGIN
const ButtonSubmit = styled.button `
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #7a7dfe;
    }
`
//Style END


const Form = ({setBothCurrency}) => {

    const[criptos, setCriptos] = useState([]);
    const[error, setError] = useState(false );

    const [ISOCurrencyCode, SelectCurrency] = useSelectCurrency('Currency', currency);
    const [criptoCurrencyCode,SelectCriptoCurrency] = useSelectCurrency('Cripto Currency', criptos);
    
    useEffect(()=>{
        const consultAPI = async () => {
            // const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${ISOCurrencyCode}`;
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
            const consult = await fetch(url);
            const result = await consult.json();
            
            const criptoArray = result.Data.map(cripto => {
                const obj ={
                    id: cripto.CoinInfo.Name, 
                    name:cripto.CoinInfo.FullName,                
                }
                return obj;
            });
            setCriptos(criptoArray);
        }
        consultAPI();
    },[]);

    const handleSubmit = e =>{
        e.preventDefault();
        if([ISOCurrencyCode, criptoCurrencyCode].includes('')){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {
            setBothCurrency({ISOCurrencyCode, criptoCurrencyCode});
        }
    }

    return (
        <>
            {error && <Error>All fields are required</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCurrency/>
                <SelectCriptoCurrency/>
                <ButtonSubmit type="submit">Consult</ButtonSubmit>
            </form>
        </>
    )
}

export default Form
