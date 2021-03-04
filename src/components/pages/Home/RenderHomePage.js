import React from 'react';

import cities from '../../../assets/imgs/cities.png';
import citylife from '../../../assets/imgs/citylife.jpg';
import map from '../../../assets/imgs/map2.jpg';
import city1 from '../../../assets/imgs/city1.png';
import city2 from '../../../assets/imgs/city2.png';
import city3 from '../../../assets/imgs/city3.png';
import city4 from '../../../assets/imgs/city4.png';
import city5 from '../../../assets/imgs/city5.png';

import { Layout, Image, Space, Carousel } from 'antd';

import { Header, Footer, SearchForm } from '../../common';

const { Content } = Layout;

const contentStyle = {
  height: '255px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#f0f2f5',
  margin: '2%',
};

function RenderHomePage() {
  return (
    <Layout className="layout">
      <Header />
      <Image
        className="cities"
        preview={false}
        src={cities}
        style={{ width: '100%', height: '30vh', marginBottom: '3rem' }}
      />
      <Space
        size="large"
        align="center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2%',
          textAlign: 'center',
        }}
      >
        {' '}
      </Space>
      <h1
        style={{
          fontSize: '3rem',
          fontFamily: 'Hachi Maru Pop, cursive',
          marginTop: '-7%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          position: 'relative',
          backgroundColor: '#FED85D',
          border: '2px dotted #5946B2',
          textShadow: '1px 1px 10px #5946B2',
        }}
      >
        Aspire to your dream home with <br />{' '}
        <strong
          style={{
            fontSize: '5rem',
            marginTop: '-2%',
            textDecoration: 'underline',
          }}
        >
          CitySpire
        </strong>
      </h1>
      <Content
        style={{ height: '85vh', marginTop: '-22rem', marginBottom: '0.03rem' }}
      >
        <SearchForm />
      </Content>

      <Space size="large" align="center">
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1%',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Searching for the perfect dream home but don't know where to start?
          You're in the right place! Let CitySpire lead you to the desires of
          your heart!
        </p>
        <Image
          preview={false}
          src={map}
          style={{
            width: '100%',
            height: '100x',
            marginBottom: '5%',
          }}
        />{' '}
      </Space>

      <a
        href="https://cityspire-states.netlify.app/"
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          background: 'navy',
          color: 'white',
          width: '30%',
          margin: 'auto 35%',
          marginBottom: '2%',
        }}
      >
        Learn more about US States
      </a>

      <Carousel
        autoplay
        style={{
          marginTop: '-2rem',
        }}
      >
        <div>
          <h3 style={contentStyle}>
            {' '}
            <Image className="Carousel" preview={false} src={city1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city2} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city3} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city4} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={city5} />
          </h3>
        </div>
      </Carousel>

      <Image
        preview={false}
        src={citylife}
        style={{ width: '100%', height: '100px' }}
      />
      <Footer />
    </Layout>
  );
}
export default RenderHomePage;
