import { useState } from 'react';

function Person({ photo, name, title, description, className, podcast, podcast2, id }) {
    const [open, setOpen] = useState(false);
    
    function openDesc() {
        setOpen(!open);
    }
    
    return (
        <>
            <div onClick={openDesc} className={`person ${ className || '' } ${open ? 'open' : ''}`}>
                <section className="person-header">
                    <div className="headshot-wrapper">
                        <img id={id} className="headshot" src={photo} onError={(e) => {
                            e.currentTarget.src = '../public/images/headshots/default.jpeg'
                        }}/>
                    </div>
                    <p className="name">{name || 'Name'}</p>
                </section>
                <p className="title">{(title)}</p>
                {podcast && <label className="podcast-label">Podcast:<audio src={podcast} controls/></label>}
                {podcast2 && <label className="podcast-label">Part 2:<audio src={podcast2} controls/></label>}
                <p className="description">{description || 'description'}</p>
            </div>
        </>
    )
}

export default Person;