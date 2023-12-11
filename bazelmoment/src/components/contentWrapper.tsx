import { videoListObj } from '../types/objTypes'

export const Article = ({ title, views }: videoListObj) => (
  <div className='item item-article'>
    <h3>
      <a href='#'>{title}</a>
    </h3>
    <p className='views'>Прочтений: {views}</p>
  </div>
)

export const Video = ({ url, views }: videoListObj) => (
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
