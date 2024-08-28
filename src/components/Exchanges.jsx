import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoApi'
import { Col, Row } from 'antd';

const Exchanges = () => {

  const {data, isFetching} = useGetExchangesQuery();

  console.log(data);


  return (
    <div>
       <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        
      </Row>
    </div>
  )
}

export default Exchanges