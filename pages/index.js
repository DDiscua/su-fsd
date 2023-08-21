import Head from 'next/head';
import { useState, useEffect } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from '../components/card';
import { Row, Col, Dropdown, Space, Button } from 'antd';
import styles from '../styles/Home.module.css';


const items = [
  {
    label: 'Created At',
    key: '1',
  },
  {
    label: 'A - Z',
    key: '2',
  },
  {
    label: 'Z - A',
    key: '3',
  }
];


export default function Home() {
  const [currentOption, setCurrentOption] = useState('');
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/utility')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])




  const handleMenuClick = (e) => {
    console.log('click', e);
    setCurrentOption(e.label);
  };


  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SORAUNION TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <Row align="top" justify={"center"}>
          <Col xs={24} md={12} lg={8} xl={8} >
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  {
                    currentOption ? currentOption : 'Sort By'
                  }
                </Space>
                <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Row align="top" justify={"center"}>
          {
            data && data.map((item, index) => {
              return (
                <Col xs={24} md={12} lg={8} xl={8} key={`col_${index}`}>
                  <Card key={index} date={item.date} name={item.name} />
                </Col>
              )
            })
          }
        </Row>

      </main>
    </div>
  )
}
