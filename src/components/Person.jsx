function Person({ photo, name, title, description, className }) {
    return (
        <>
        <div className={`person ${ className || '' }`}>
            <section className="person-header">
                <img className="headshot" src={photo} onError={(e) => {
                    e.currentTarget.src = '../public/images/headshots/default.jpeg'
                }}/>
                <p className="name">{name || 'Name'}</p>
            </section>
            <p className="title">{title || 'Title'}</p>
            <p className="description">{description || 'description'}</p>
        </div>
        </>
    )
}

export default Person;