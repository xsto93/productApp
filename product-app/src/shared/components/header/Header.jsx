import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';
import { useSelector } from 'react-redux';
//import { ShoppingCartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { string, element } = PropTypes;

function Navbar({ title, children }) {
  const { cartNumber } = useSelector((state) => state);
  return (
    <Row justify="space-between">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Header className="header-fixed">
          <Row justify="end">
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="container-title"
            >
              <Title id="title-button" level={4}>
                <Link to={'products'}>{title}</Link>
              </Title>
            </Col>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="container-shoppingcard"
            >
              <Text id="title-cart" level={3} style={{ color: '#1890ff' }}>
                <p>
                  Nº de artículos: <strong>{cartNumber}</strong>
                </p>
              </Text>
              {/*<div className="div">
                 <ShoppingCartOutlined
                  alt="carro"
                  style={{ color: '#1890ff', fontSize: '1rem' }}
                />
              </div>*/}
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
      </Col>
    </Row>
  );
}

Navbar.propTypes = {
  title: string.isRequired,
  children: element,
};

export default Navbar;
