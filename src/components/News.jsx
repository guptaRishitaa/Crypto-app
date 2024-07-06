import Typography from "antd/es/typography/Typography";
import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Avatar, Card, Col, Row, Select } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Option } from "antd/es/mentions";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;

const News = ({ simplified }) => {

  const [topic, setTopic] = useState('BUSINESS')
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    topic,
    count: simplified ? 6 : 20,
  });

  // const {data} = useGetCryptosQuery(100);

  const newsData = cryptoNews?.data;

  // console.log(data.data);
  console.log(cryptoNews);
  console.log(newsData);

  // if(!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch
          className='select-news'
          placeholder='Select a Category'
          optionFilterProp = 'children'
          onChange={(value)=>setTopic(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
            <Option value='BUSINESS'>Business</Option>
            <Option value='WORLD'>WORLD</Option>
            <Option value='NATIONAL'>NATIONAL</Option>
            <Option value='TECHNOLOGY'>TECHNOLOGY</Option>
            <Option value='SPORTS'>SPORTS</Option>
            <Option value='SCIENCE'>SCIENCE</Option>
            <Option value='HEALTH'>HEALTH</Option>

          </Select>
        </Col>
        
        )}

      {newsData?.map((news, i) => (
        <Col xs={24} lg={8} sm={12} key={i}>
          <Card hoverable className="news-card">
            <a href={news.source_url} target="blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {" "}
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                  src={news?.photo_url}
                  alt="news"
                />
              </div>
              {/* <p>
This is the discription
                </p> */}

              <div className="provider-container">
                <div>
                  <Avatar src={news.source_logo_url || demoImage} alt="" />
                  {/* <Text className='provider-name'>{news.source_url}</Text> */}
                </div>
                <Text>
                  {" "}
                  {moment(news.published_datetime_utc)
                    .startOf("ss")
                    .fromNow()}{" "}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
