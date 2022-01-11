import { useState } from "react";
import styled from "@emotion/styled";

//Style BEGIN {
const CurrencyLabel = styled.label`
    color: #FFFFFF;
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 15px 0;
    
`;

const CurrencySelect = styled.select`
    width:100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;
//Style END }

//returns: 'array || object || jsx html'
const useSelectCurrency = (label, options) => {

    const [state, setState] = useState('');

    const currency = () => (
        <>
            <CurrencyLabel htmlFor="localCurrency">{label}</CurrencyLabel>
            <CurrencySelect id="localCurrency" 
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="">--Choose an option--</option>
                {options.map( choice => (
                    <option
                        key={choice.id}
                        value={choice.id}
                    >{choice.name}</option>
                ))}
            </CurrencySelect>
        </>
    )

    return [state, currency];
}

export default useSelectCurrency
