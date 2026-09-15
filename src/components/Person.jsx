function Person({ photo, name, title, description, className, podcast, podcast2 }) {
    return (
        <>
        <div className={`person ${ className || '' }`}>
            <section className="person-header">
                <img className="headshot" src={photo} onError={(e) => {
                    e.currentTarget.src = '../public/images/headshots/default.jpeg'
                }}/>
                <p className="name">{name || 'Name'}</p>
            </section>
            <p className="title">{(title)}</p>
            <p className="description">{description || 'description'}</p>
            {podcast && <label className="podcast-label">Podcast:<audio src={podcast} controls/></label>}
            {podcast2 && <label className="podcast-label">Part 2:<audio src={podcast2} controls/></label>}
        </div>
        </>
    )
}

export default Person;