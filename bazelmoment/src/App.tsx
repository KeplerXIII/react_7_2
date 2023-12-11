import { useState } from 'react'
import { videoList } from './db/videoList'
import { List } from './components/listCreator'


export default function App() {
  const [list] = useState(videoList)

  return <List list={list} />
}
