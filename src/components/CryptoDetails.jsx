import { Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const {Title,  Text} = Typography;
const {Option} = Select;

const CryptoDetails = () => {

  const { uuid} = useParams();
  const [timePeriod, setTimePeriod] = useState('7d')
  const {data, isFetching} = useGetCryptoDetailsQuery(uuid)

  console.log(data);

  return (
    <div>CryptoDetails {uuid}</div>
  )
}

export default CryptoDetails