import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Mock, { Random } from 'mockjs';
import ImageList from '../.'; // 此处存在 parcel alias 见下文

const App = () => {
  // 初始化图片列表
  const initImageList = () => {
    return Mock.mock({
      'imageList|10-15': [{
        'id|+1': 1,
        'sourceUrl': Random.dataImage('300x250'),
        'thumbnailUrl|+1': [
          Random.dataImage('300x250'),
          Random.dataImage('450x300'),
          Random.dataImage('300x500'),
          Random.dataImage('300x600'),
          Random.dataImage('400x400'),
          Random.dataImage('400x400'),
        ],
        'thumbnailTrueUrl|+1': '',
        'name': Random.cname(),
        'width|+1': [300, 450, 300, 300, 400, 400],
        'height|+1': [250, 300, 500, 600, 400, 400]
      }]
    }).imageList;
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: 20, color: '#333', margin: '10px 0' }}>图片自适应列表</div>
      <ImageList
        imagePropList={initImageList()}
        listChange={false}
        containerWidth={800}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
