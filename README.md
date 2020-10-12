<h1 align="center">Welcome to image-list-resize 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Prerequisites
- React >= 16.8
- node >= 10

## How to use
1. install
```
npm install image-list-resize
```
2. use
```typescript
import * as ReactDOM from 'react-dom';
import * as React from 'react';
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
```

## Author

👤 **'obf1313'**


## Show your support

Give a star if this project helped you!<br>
https://github.com/obf1313/image-list-resize

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
