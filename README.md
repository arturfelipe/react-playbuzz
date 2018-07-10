# react-playbuzz [![Build Status](https://travis-ci.org/arturfsousa/react-playbuzz.svg?branch=master)](https://travis-ci.org/arturfsousa/react-playbuzz) [![codecov](https://codecov.io/gh/arturfsousa/react-playbuzz/branch/master/graph/badge.svg)](https://codecov.io/gh/arturfsousa/react-playbuzz)

React component to render an embeded PlayBuzz game. [How to embed a PlayBuzz game](https://publishers.playbuzz.com/academy/how_to/how-do-i-embed/)

## Install

To install and use this component:

```shell
yarn add react-playbuzz
```

or you can do it with `npm` also:

```shell
npm install react-playbuzz
```

## Usage

Just import the `PlayBuzz` component from the `react-playbuzz` package and use
it as a simple react component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import PlayBuzz from 'react-playbuzz';

ReactDOM.render(
  <PlayBuzz
    url='http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero'
    load={true}
    options={{
      shares: true
    }}
  />,
  document.getElementById('root')
);
```

### Properties

| Name      	| Type   	| Description                                                         	| Sample                                                               	| Default 	|
|-----------	|--------	|---------------------------------------------------------------------	|----------------------------------------------------------------------	|---------	|
| url       	| string 	| Game URL                                                            	| "http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero" 	| ""      	|
| load      	| bool   	| Load playbuzz script async from `cdn` if its not already loaded     	| true                                                                 	| false   	|
| height    	| int    	| Component height in pixels                                          	| 250                                                                  	| null    	|
| recommend 	| bool   	| Display recommendations for more items                              	| true                                                                 	| false   	|
| gameInfo 	  | bool   	| Display item info (the thumbnail, name, description and editor)     	| true                                                                 	| false   	|
| comments  	| bool   	| Use facebook comments                                               	| true                                                                 	| false   	|
| shares    	| bool   	| Display share buttons (will redirect to your page)                  	| true                                                                 	| false   	|

The __load__ property add a `script` tag asynchronously to the end of the `body`
tag: `//cdn.playbuzz.com/widget/feed.js`. Only if it is not already loaded.

## Demo

To run a demonstration, clone this project, install it locally and start the
demo server:

```shell
yarn
npm start
```

or

```shell
npm i
npm start
```

You may see a message: `Listening at http://localhost:3000`. Then go to your
browser and check it out: `http://localhost:3000/demo`.

## Testing

This projects uses `jest`, `enzime` and `jsdom` for testing. To run the tests:

```shell
npm test
```
