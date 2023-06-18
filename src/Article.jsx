export default ({ fullPortrait, developerName, displayName, description, displayIcon }) => {

    let readMore = "https://playvalorant.com/en-us/agents/" + displayName;
    // console.log(readMore)

    return (
      <div className="article-container">
        <div className="text-container">
          <p className="date">Developer: {developerName}</p>
          <h2>
            {displayName}
            <img
              className="portrait"
              src={displayIcon}
              alt="Bust portrait"
              max-width="20px"
            />
          </h2>
          <p className="summary">{description}</p>
          <div className="btn">
            <a href={readMore} target="_blank">
              Read more
                    </a>
                    
          </div>
        </div>
        <div className="img-container">
          <img src={fullPortrait} alt="Agent image" />
        </div>
      </div>
    );
}