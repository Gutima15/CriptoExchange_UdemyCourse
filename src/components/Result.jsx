import { useEffect } from "react";
import styled from "@emotion/styled"
//Style Begin
const ExchangeInfo = styled.div`
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
`;
const Text = styled.p`
    font-size: 20px;
    padding: 6px;
    border-radius: 5px;
    transition: transform 1s ease;
    span{
        font-weight: 700;
    }

    &:hover{
        transform: scale(110%);
        
    }
`;
const Price = styled.p`
    font-size: 25px;
    padding: 6px;
    border-radius: 5px;
    transition: transform 1s ease;
    span{
        font-weight: 700;
    }
    
    &:hover{
        transform: scale(105%);
        
    }
`;

//Style End
const Result = ({exchangeResult, setIconImg}) => {
    useEffect(()=>{
        setIconImg(exchangeResult.IMAGEURL);
    },[exchangeResult]);

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = exchangeResult;
    return (
        <ExchangeInfo>
            <div>
                <Price>The current price is: <span>{PRICE}</span></Price>
                <Text>The highest price today: <span>{HIGHDAY}</span></Text>
                <Text>The lowest price today: <span>{LOWDAY}</span></Text>
                <Text>Fluctuation during the last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </ExchangeInfo>
    )
}

export default Result
