import React from 'react';


const PlayBuzz = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className="playbuzz">
      <div
        className="pb_feed"
        data-game={url}
        data-recommend="false"
        data-game-info="false"
        data-comments="false"
        data-shares="false"
      />
    </div>
  );
};

PlayBuzz.propTypes = {
  url: React.PropTypes.string,
};

export default PlayBuzz;
