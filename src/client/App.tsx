import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useBooksQuery } from './generated/client-api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  const { loading, error, data } = useBooksQuery();
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <div>Error: {error.message}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.books?.map((book) => {
            return (
              <TableRow key={book?.title}>
                <TableCell component="th" scope="row">
                  {book?.title}
                </TableCell>
                <TableCell>{book?.author}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default App;
