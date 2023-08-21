import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Card, DropdownSort } from '../components';
import { Row, Col, Spin } from 'antd';
import { sortBy } from "./utils/sortBy";
import styles from '../styles/Home.module.css';

export default function Home() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/utility')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log('data', data);
        setLoading(false);
      })
  }, [isLoading])


  const sortData = (sortType) => {
    setLoading(true);
    const sortedData = sortBy(data, sortType);
    setData([...sortedData]);
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SORAUNION TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main-container'>
        <Row align="top" justify={"center"} className='dropdown-container'>
          <Col xs={24} md={12} lg={8} xl={8} >
            <DropdownSort sortHook={sortData} />
          </Col>
        </Row>
        {
          isLoading
            ?
            <Row align="top" justify={"center"} >
              <Spin size="large" tip="Loading" ></Spin>
            </Row>
            :
            <Row align="top" justify={"center"} gutter={16}>
              {
                data && data.map((item, index) => {
                  return (
                    <Col xs={24} md={12} lg={8} xl={8} key={`col_${index}`} span={8} style={{ paddingTop: '2rem' }}>
                      <Card key={index} date={item.date} name={item.name} />
                    </Col>
                  )
                })
              }
            </Row>
        }
      </main>
    </div>
  )
}
