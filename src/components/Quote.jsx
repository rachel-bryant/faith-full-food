function Quote({quote, author}) {
    return (
        <>
        <div className="quote-container">
            <p className="quote">"{quote || "Quote"}" <span className="dash">- </span><span className="author">{author || "Author"}</span></p>
        </div>
        </>
    );
}

export default Quote;