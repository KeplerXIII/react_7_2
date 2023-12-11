import { useState } from 'react'
import { videoList } from './db/videoList'
import { videoListObj, videoListObjList } from './types/objTypes'

const New = ({ children }) => (
  <div className='wrap-item wrap-item-new'>
    <span className='label'>New!</span>
    {children}
  </div>
)

const Popular = ({ children }) => (
  <div className='wrap-item wrap-item-popular'>
    <span className='label'>Popular!</span>
    {children}
  </div>
)

const Article = ({ title, views }: videoListObj) => (
  <div className='item item-article'>
    <h3>
      <a href='#'>{title}</a>
    </h3>
    <p className='views'>Прочтений: {views}</p>
  </div>
)

const Video = ({ url, views }: videoListObj) => (
  <div className='item item-video'>
    <iframe
      src={url}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
    ></iframe>
    <p className='views'>Просмотров: {views}</p>
  </div>
)

const List = ({ list }: videoListObjList) => {
  return list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return <Video {...item} key={index} />

      case 'article':
        return <Article {...item} key={index} />
    }
  })
}

export default function App() {
  const [list] = useState(videoList)

  return <List list={list} />
}
