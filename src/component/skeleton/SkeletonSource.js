import Skeleton from "./Skeleton.js"
import './skeleton.css'

const SkeletonSource = () => {
  return (
    <li className="skeleton-wrapper">
      <div className="article">
        <Skeleton type="avatar" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </li>
  )
}

export default SkeletonSource;