import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Anchor, Space } from 'antd';

const { Link } = Anchor;

const getCurrentAnchor = () => {
  return '##components-pages-States-StatesList';
};

function RenderUSstates(props) {
  return (
    <Space
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Anchor
        affix={false}
        getCurrentAnchor={getCurrentAnchor}
        style={{
          fontSize: '1rem',
          color: 'blue',
        }}
      >
        <Link href="#components-pages-States-StatesList" title="US States" />
      </Anchor>
    </Space>
  );
}
export default RenderUSstates;
