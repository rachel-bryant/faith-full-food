function Project({title, desc}) {
    return (
        <>
        <div className="project">
            <h1 className="project-title">{title || "Project Title"}</h1>
            <p className="project-desc">{desc || "Project Description."}</p>
        </div>
        </>
    )
}

export default Project;