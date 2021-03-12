import Skeleton from "./Skeleton.js"
import './skeleton.css'

const SkeletonList = () => {
  return (
    <li className="skeleton-wrapper">
      <div className="article">
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </li>
  )
}

export default SkeletonList;