import { videoListObj, videoListObjList } from '../types/objTypes'

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

export const List = ({ list }: videoListObjList) => {
  return list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return <Video {...item} key={index} />

      case 'article':
        return <Article {...item} key={index} />
    }
  })
}
