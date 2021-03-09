import { SourceContext } from "../../context/SourceContext";
import { useContext, useState } from "react";

const ProjectForm = () => {
  const {newProject} = useContext(SourceContext);
  const [project, setProject] = useState({ title: '', desc: '', language: '', link: '' })

  const handleInput = () => {
    newProject(project.title, project.desc, project.language, project.link)
    setProject({ title: '', desc: '', language: '', link: '' })
  }

  return (
    <li>
      <h3>Tambah Project</h3>
      <input type="text" placeholder="Project Name" value={project.title}
      onChange={e => setProject(prev => ({...prev, title: e.target.value}))}/>
      <input type="text" placeholder="Project Desc" value={project.desc}
      onChange={e => setProject(prev => ({...prev, desc: e.target.value}))}/>
      <input type="text" placeholder="Project Language" value={project.language}
      onChange={e => setProject(prev => ({...prev, language: e.target.value}))}/>
      <input type="text" placeholder="Project Link" value={project.link}
      onChange={e => setProject(prev => ({...prev, link: e.target.value}))}/>
      <button onClick={handleInput}>Tambah Project</button>
    </li>
  )
}

export default ProjectForm;