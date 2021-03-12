import { SourceContext } from "../context/SourceContext.js";
import { useContext } from "react";
import SkeletonList from "./skeleton/SkeletonList.js";
import Skeleton from "./skeleton/Skeleton.js";

const MyProfile = () => {
  const {profile, project} = useContext(SourceContext)
  return (
    <div className="myprofile">
      <section >
        <div><h1>My Profile</h1></div>
        <ul className="about">
          <li>
            {profile && <>
              <p>Name : {profile['name']}</p>
              <p>Email : {profile['email']}</p>
              <p>City : {profile['city']}</p>
            </>}
            {!profile && <>
              <Skeleton type="text2" />
              <Skeleton type="text2" />
              <Skeleton type="text2" />
            </>}
          </li>
          <li>
            {profile && <>
            <p>Country : {profile['country']}</p>
            <p>Birthday : {profile['birthday']}</p>
            <p>Hobby : {profile['hobby']}</p>
            </>}
            {!profile && <>
              <Skeleton type="text2" />
              <Skeleton type="text2" />
              <Skeleton type="text2" />
            </>}
          </li>
        </ul>
      </section>
      <section>
        <h1>My Project</h1>
        <ul className="project">
          {!project && [0,1,2,3].map(i => <SkeletonList key={i}/>)}
          {project && objectMap(project)}
        </ul>
      </section>
    </div>
  )
}

export default MyProfile;
// figuring out how to map object with every model type
// object map for data list
const objectMap = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return (
      <li key={key}>
        <span>Title</span> <span>: {value['title']}</span>
        <span>Description</span> <span>: {value['desc']}</span>
        <span>Language</span> <span>: {value['language']}</span>
        <span>Link</span> <span>: {value['link']}</span>
      </li>
    )
  })
}