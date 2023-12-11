import { ReactNode } from 'react'

export type videoListObj = {
  type: string
  title?: string
  url?: string
  views: number
}

export type videoListObjList = {
  list: videoListObj[]
}

export type WrapProps = {
  children: ReactNode
}
