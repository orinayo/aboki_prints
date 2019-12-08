import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const withSpinner = (WrappedComponent) => ({isLoading, ...rest}) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...rest} />
  );

export default withSpinner;
