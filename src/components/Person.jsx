function Person({ photo, name, description }) {
    return (
        <>
        <div className="person">
            <section className="person-header">
                <img className="headshot" src={photo}/>
                <p className="name">{name}</p>
            </section>
            <p className="description">{description}</p>
        </div>
        </>
    )
}

export default Person;