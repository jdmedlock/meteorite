# Meteorite - Explore meteorite strikes
[Meteorite App](https://jdmedlock.github.io/meteorite/)
<br/>

[![meteorite last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/jdmedlock/meteorite)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jdmedlock/meteorite/)


![Screenshot](https://github.com/jdmedlock/meteorite/blob/development/docs/me_screenshot.png)

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
homepage for the meteorite landings data is accessed in the code by referencing
`process.env.REACT_APP_METEORITE_LANDING_HOMEPAGE`.

Remember that even though this keeps secure tokens like client id's and secrets
out of application code it does not make them secure.

| Environment Variable    | Description | Example Setting |
|:------------------------|:------------|:----------------|
| REACT_APP_METEORITE_LANDING_HOMEPAGE | Nasa Meteorite Landing homepage | N/a |
| REACT_APP_METEORITE_STRIKE_DATASET | URL for JSON dataset | N/a

## Dependencies

### Libraries

This app has the following dependencies

| Module/Library | Environment | Description | Related Files |
|:---------------|:------------|:------------|:--------------|
| lodash.debounce | Runtime    | _debounce text input | N/a  |
| prop-types     | Runtime     | Type checking for props | N/a |
| react          | Runtime     | UI Library  | N/a           |
| react-dom      | Runtime     | DOM renderer for React | N/a |
| react-scripts  | Runtime     | scripts and configuration used by Create React App | N/a |

In addition to these libraries, which the app explicitly depends on,
Create React App includes other libraries such as Babel and Webpack. For more
information about Create React App and it's dependencies consult its
[documentation](https://github.com/facebook/create-react-app).

### External Dependencies

In addition to libraries Meteorite Explorer also depends on webservices to
provide with details about places. The [Meteorite Landing dataset](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh)
site contains the detailed data about meteorite landings required by this app.

## Application Structure

The component structure of the Meteorite Explorer application is shown in the
following diagram.

![React Component Structure](https://github.com/jdmedlock/meteorite/blob/development/docs/me_component_structure.png)

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

