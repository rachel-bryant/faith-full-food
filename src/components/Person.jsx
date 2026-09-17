import { useState, useRef, useEffect } from 'react';

function Person({ photo, name, title, description, className, podcast, podcast2, id }) {
    const [open, setOpen] = useState(false);
    const [podcastHeight, setPodcastHeight] = useState('100%');
    const podcastRef = useRef(null);

    function openDesc() {
        setOpen(!open);
    }

    useEffect(() => {
        const el = podcastRef.current;
        if (!el) {
            setPodcastHeight('100%');
            return;
        }

        const updateHeight = () => {
            setPodcastHeight(`${el.offsetTop}px`);
        };

        const observer = new ResizeObserver(updateHeight);
        observer.observe(el);
        updateHeight();

        return () => observer.disconnect();
    }, [podcast, podcast2]);

    const hasPodcasts = podcast || podcast2;

    return (
        <>
            <div
                onClick={openDesc}
                className={`person ${className || ''} ${open ? 'open' : ''}`}
                style={{ '--podcast-height': podcastHeight }}
            >
                <section className="person-header">
                    <div className="headshot-wrapper">
                        <img id={id} className="headshot" src={photo} />
                    </div>
                    <p className="name">{name || 'Name'}</p>
                </section>
                <p className="title">{(title)}</p>
                {hasPodcasts && (
                    <div ref={podcastRef}>
                        {podcast && <label className="podcast-label">Podcast:<audio src={podcast} controls/></label>}
                        {podcast2 && <label className="podcast-label">Part 2:<audio src={podcast2} controls/></label>}
                    </div>
                )}
                <p className="description">{description || 'description'}</p>
            </div>
        </>
    )
}

export default Person;