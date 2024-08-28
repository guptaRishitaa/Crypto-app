import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify';
import { Card, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Cryptocurrencies = ({simplified}) => {

  const count = simplified? 10 : 100;

  const {data : cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  console.log(cryptosList);

  useEffect(()=>{

    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData)
  }, [cryptosList, searchTerm]);
  // here this means that the function inside useEffect will get executed whenever cryptosList or searchTerm changes

  if(isFetching) return <Loader/> ;
  
  return (
    <React.Fragment>

      {!simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(e) =>setSearchTerm(e.target.value)}/>


      </div>
      )}
 
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}  >
            <Card title={`${currency.rank}. ${currency.name}`}
            extra={<img className='crypto-image' src={currency.iconUrl}/>}
            hoverable>

              <p>Price: {millify(currency.price)} </p>
              <p>Market Cap: {millify(currency.marketCap)} </p>
              <p>Daily Change: {millify(currency.change)}% </p>
              <p>MAKING  A CHANGE</p>

            </Card>
            </Link>
          </Col>
        ))}

      </Row>
    </React.Fragment>


  )
}

export default Cryptocurrencies