import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imgCripto from './img/criptoImage.png'
import Form from './components/Form'
import Spinner from './components/Spinner'
import Result from './components/Result'
//Style Setion BEGIN

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  display: block;
  
  :last-child{
    margin: 150px auto 20px auto;
    width: 40%;
  }
  :first-of-type{
    margin: 100px auto 0 auto;
    width: 80%;
  }

`
const Heading = styled.h1 `
  font-family: 'Poppins', sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-weight: 600;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color:  #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const CurrencyIcon = styled.img`
    display: block;
    width: 110px;
`;
//Style Setion END


function App() {

  const [bothCurrency, setBothCurrency] = useState({});
  const [exchangeResult, setexchangeResult] = useState({});
  const [iconImg, setIconImg] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    if(Object.keys(bothCurrency).length > 0){
      const consultExchange = async() =>{
        setLoading(true);
        const {criptoCurrencyCode, ISOCurrencyCode} = bothCurrency;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrencyCode}&tsyms=${ISOCurrencyCode}`;
        const consult = await fetch(url);
        const result = await consult.json();
        //With the next syntax.. you can navigate inside the json with variables
        setexchangeResult(result.DISPLAY[criptoCurrencyCode][ISOCurrencyCode]);
      }
      consultExchange();
      setLoading(false);
    }
  },[bothCurrency])

  return (
    <Container>
      {/* First column */}
      <div>
        <Image src = {imgCripto} /> 
        {iconImg && <Image src={`https://cryptocompare.com/${iconImg}`}/>}
      </div>
      <div> {/* Second column */}
        <Heading>Exchange all kind of Cripto Currency</Heading>
        <Form 
          setBothCurrency={setBothCurrency}
        />
        {loading && <Heading>loading</Heading>}
        {exchangeResult.PRICE && <Result exchangeResult={exchangeResult} setIconImg={setIconImg}/>}
      </div>
    </Container>
  )
}

export default App
