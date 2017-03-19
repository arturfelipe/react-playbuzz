import React from 'react';
import decamelize from 'decamelize';


const loadScript = () => {
  const script = document.createElement('script');
  script.src = '//cdn.playbuzz.com/widget/feed.js';
  script.async = true;
  document.body.appendChild(script);
};

const PlayBuzz = ({ url, load, options }) => {
  if (!url) {
    return null;
  }

  if (load && !window.PlayBuzz) {
    loadScript();
  }

  const opt = Object.assign({
    recommend: false,
    gameInfo: false,
    comments: false,
    shares: false,
  }, options);

  const config = {};
  Object.keys(opt).map((option) => {
    const value = opt[option];
    if (option === 'height') {
      config[`data-${option}`] = value;
      return null;
    }
    if (!value) {
      config[`data-${decamelize(option, '-')}`] = value;
    }
    return null;
  });

  return (
    <div className="playbuzz">
      <div
        className="pb_feed"
        data-game={url}
        {...config}
      />
    </div>
  );
};

PlayBuzz.propTypes = {
  url: React.PropTypes.string,
  load: React.PropTypes.bool,
  options: React.PropTypes.shape({
    height: React.PropTypes.number,
    recommend: React.PropTypes.bool,
    gameInfo: React.PropTypes.bool,
    comments: React.PropTypes.bool,
    shares: React.PropTypes.bool,
  }),
};

PlayBuzz.defaultProps = {
  url: '',
  load: false,
  options: {},
};

export default PlayBuzz;
