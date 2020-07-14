import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useBooksQuery, useDeleteBookMutation } from './generated/client-api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  const { loading, error, data, refetch } = useBooksQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [deleteBook] = useDeleteBookMutation({
    onCompleted: () => refetch(),
  });

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = async (title: string | undefined) => {
    if (!title) {
      return;
    }
    const result = await deleteBook({ variables: { title } });
    console.log(result);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Action</TableCell>
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
                <TableCell>
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(book?.title);
                    }}
                    color="secondary"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default App;
