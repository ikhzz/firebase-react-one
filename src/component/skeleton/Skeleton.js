import './skeleton.css'

const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <li className={classes}>

    </li>
  )
}
export default Skeleton;