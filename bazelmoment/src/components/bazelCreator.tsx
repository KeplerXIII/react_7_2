import { videoListObj } from '../types/objTypes'
import { WrapProps } from '../types/objTypes'

const New = ({ children }: WrapProps) => (
  <div className='wrap-item wrap-item-new'>
    <span className='label'>New!</span>
    {children}
  </div>
)

const Popular = ({ children }: WrapProps) => (
  <div className='wrap-item wrap-item-popular'>
    <span className='label'>Popular!</span>
    {children}
  </div>
)

export const bazelChkecker = (
  WrappedComponent: React.ComponentType<videoListObj>
) => (props: videoListObj) => {
  if (props.views <= 100) {
    return (
      <New>
        <WrappedComponent {...props} />
      </New>
    )
  }
  if (props.views >= 1000) {
    return (
      <Popular>
        <WrappedComponent {...props} />
      </Popular>
    )
  } else return <WrappedComponent {...props} />
}
