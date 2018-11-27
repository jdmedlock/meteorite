# Meteorite - Explore meteorite strikes
[Meteorite App](https://jdmedlock.github.io/meteorite/)
<br/>

[![meteorite last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/jdmedlock/meteorite)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jdmedlock/meteorite/)


![Screenshot](https://github.com/jdmedlock/meteorite/blob/development/docs/meteorite_screenshot.png)

## Table of Contents

* [Overview](#overview)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [Application Structure](#application-structure)
* [FAQ](#frequently-asked-questions)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

This app provides its users with the ability to explore meteorite strikes
across the globe by searching the [Meteorite Landing dataset](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) on the Nasa
Open Data Portal.

## Usage

### UI Features

TBD

### Starting & Building the App

To start the application in development mode simply run `npm run start`from
the command line. The application will automatically open a new tab in your
browser with the url `localhost:3000`.

To start the application in production mode run `npm run serve`
from the command line. In production mode the app will automatically create a
new browser tab with the url `localhost:5000`. The main difference between
production and development modes is a Service Worker runs in productin mode to
support offline execution.

The production version of the app is build by running `npm run publish`.

### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the following table. It's important to keep in mind that when these settings
in the `.env` file are changed `npm run build` must be run before they will
take effect.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`. For example, the
neighborhood's latitude is accessed in the code by referencing
`process.env.REACT_APP_LAT`.

Remember that even though this keeps secure tokens like client id's and secrets
out of application code it does not make them secure.

| Environment Variable    | Description | Example Setting |
|:------------------------|:------------|:----------------|
| REACT_APP_LAT           | Latitude of the neighborhood | REACT_APP_LAT=28.4812299 |
| REACT_APP_LNG           | Longitude of the neighborhood | REACT_APP_LNG=-80.8883962 |
| REACT_APP_MAPS_URL      | Google Maps URL with API key | REACT_APP_MAPS_URL="https://maps.googleapis.com/maps/api/js?libraries=places&key=\<YOUR-API-KEY\>" |
| REACT_APP_SEARCH_RADIUS | Radius, in meters, searches are constrained to | REACT_APP_SEARCH_RADIUS=16000 |
| REACT_APP_FS_CLIENT_ID  | Foursquare API client id | REACT_APP_FS_CLIENT_ID=ADADEAFDF4ADFADFAA5ADADFAFAD |
| REACT_APP_FS_CLIENT_SECRET | Foursquaer API client secret | REACT_APP_FS_CLIENT_SECRET=ADADEAFDF4ADFADFAA5ADADFAFAD |

## Dependencies

### Libraries

This app has the following dependencies

| Module/Library | Environment | Description | Related Files |
|:---------------|:------------|:------------|:--------------|
| autoprefixer   | Development | Parses CSS and adds vendor prefixes to CSS rules | N/a |
| css-loader     | Development | Resolves CSS @import and url() paths | N/a |
| extract-loader | Development | Extracts the CSS into a .css file | N/a |
| file-loader    | Development | Serves the .css file as a public URL | N/a |
| lodash.debounce | Runtime    | _debounce text input | N/a  |
| node-sass-chokidar | Development | CSS complier | N/a |
| npm-run-all    | Runtime     | Run multiple scripts | N/a |
| postcss-loader | Deveopment  | Loader for Webpack used in conjunction with autoprefixer | N/a |
| prop-types     | Runtime     | Type checking for props | N/a |
| react          | Runtime     | UI Library  | N/a           |
| react-dom      | Runtime     | DOM renderer for React | N/a |
| react-router   | Runtime     | Declarative routing for React | N/a |
| react-scripts  | Runtime     | scripts and configuration used by Create React App | N/a |
| rmwc           | Runtime     | [React Material Web Components](https://jamesmfriedman.github.io/rmwc//) | N/a |
| sass-loader    | Development | Loads a Sass file and compiles it to CSS | N/a |

In addition to these libraries, which the app explicitly depends on,
Create React App includes other libraries such as Babel and Webpack. For more
information about Create React App and it's dependencies consult its
[documentation](https://github.com/facebook/create-react-app).

### External Dependencies

In addition to libraries Neighborhood Maps also depends on webservices to
provide with details about places. The [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
used for basic
searching and to populate information windows on the map with basic information.

## Application Structure

The component structure of the neighborhoodmap application is shown in the following
diagram.

![neighborhoodmap Component Structure](https://github.com/jdmedlock/neighborhoodmap/blob/development/docs/meteorite_component_structure.png)

## Frequently Asked Questions

TBD

## Change Log

For more information see [Change Log](https://github.com/jdmedlock/meteorite/blob/development/docs/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/jdmedlock/meteorite/blob/development/docs/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/jdmedlock/meteorite/blob/development/docs/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/jdmedlock/meteorite/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)

