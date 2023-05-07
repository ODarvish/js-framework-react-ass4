export default ({ title, menu }) => {
    return (
        <header>
            <div className="container">
                <h1>{title}</h1>
            </div>
            <a href="https://www.figma.com/community/file/1209724056553648259" target="_blank" className="icon">{menu}</a>
        </header>
    )
};