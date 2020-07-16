import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu, Refresh } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  refreshButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {
  onRefreshClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
};

const Header: React.FC<Props> = ({ onRefreshClick }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <IconButton
            className={classes.refreshButton}
            onClick={onRefreshClick}
          >
            <Refresh />
          </IconButton>
          <Typography variant="h6" component="h1" className={classes.title}>
            Typescript React Apollo
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Header;
