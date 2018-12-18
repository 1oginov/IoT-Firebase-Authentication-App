// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  authContainer: {
    marginBottom: 3 * theme.spacing.unit,
  },
  info: {
    marginBottom: 3 * theme.spacing.unit,
    textAlign: 'center',
  },
  root: wrapView(theme),
});

export default withStyles(styles);
