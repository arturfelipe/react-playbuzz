import React from 'react';


const loadScript = () => {
  const script = document.createElement('script');
  script.src = '//cdn.playbuzz.com/widget/feed.js';
  script.async = true;
  document.body.appendChild(script);
};

const PlayBuzz = ({ url, load }) => {
  if (!url) {
    return null;
  }

  if (load && !window.PlayBuzz) {
    loadScript();
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
  load: React.PropTypes.bool,
};

PlayBuzz.defaultProps = {
  url: '',
  load: false,
};

export default PlayBuzz;
