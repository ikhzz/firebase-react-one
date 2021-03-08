import { SourceContext } from "../context/SourceContext.js";
import { useState, useContext } from "react";

const MyProfile = () => {
  const {profile, project} = useContext(SourceContext)
  console.log(profile)
  console.log(project)
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
          </li>
          <li>
            {profile && <>
            <p>Country : {profile['country']}</p>
            <p>Birthday : {profile['birthday']}</p>
            <p>Hobby : {profile['hobby']}</p>
            </>}
          </li>
        </ul>
      </section>
      <section>
        <h1>My Project</h1>
        <ul className="project">
          {project && test(project)}
        </ul>
      </section>
    </div>
  )
}

export default MyProfile;

const test = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return (
      <li key={key}>
        <span>Title</span> <span>: {value['projectTitle']}</span>
        <span>Description</span> <span>: {value['projectDesc']}</span>
        <span>Language</span> <span>: {value['projectLanguage']}</span>
        <span>Link</span> <span>: {value['projectLink']}</span>
      </li>
    )
  })
}