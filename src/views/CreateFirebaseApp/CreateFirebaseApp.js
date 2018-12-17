// @flow

import * as React from 'react';

import Bar from '../../components/Bar';
import FirebaseAppForm from '../../components/FirebaseAppForm';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  classes: { [string]: string },
  handleBackClick: () => void,
  onSubmit: FirebaseApp => void,
};

const CreateFirebaseApp = ({ classes, handleBackClick, onSubmit }: Props) => (
  <React.Fragment>

    <Bar navigationClick={handleBackClick} title="Create Firebase app" />

    <div className={classes.root}>
      <FirebaseAppForm className={classes.form} buttonTitle="Create" onSubmit={onSubmit} />
    </div>

  </React.Fragment>
);

export default CreateFirebaseApp;