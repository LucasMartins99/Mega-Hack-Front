/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
  // eslint-disable-next-line react/prop-types
  component: Component,
  // eslint-disable-next-line react/prop-types
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}
// eslint-disable-next-line react/no-typos
RouteWrapper.PropTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};
