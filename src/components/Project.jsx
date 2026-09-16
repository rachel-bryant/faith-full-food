function Project({title, desc, id}) {
    return (
        <>
        <div className="project">
            <h1 id={id} className="project-title">{title || "Project Title"}</h1>
            <p className="project-desc">{desc || "Project Description."}</p>
        </div>
        </>
    )
}

export default Project;