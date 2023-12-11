import { videoListObjList } from '../types/objTypes'
import { bazelChkecker } from './bazelCreator'
import { Article, Video } from './contentWrapper'

const CheckedArticle = bazelChkecker(Article)
const CheckedVideo = bazelChkecker(Video)

export const List = ({ list }: videoListObjList) => {
  return list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return <CheckedVideo {...item} key={index} />

      case 'article':
        return <CheckedArticle {...item} key={index} />
    }
  })
}
