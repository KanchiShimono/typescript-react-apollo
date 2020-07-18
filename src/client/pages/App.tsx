import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { Add, Delete } from '@material-ui/icons';
import React, { useState } from 'react';
import Header from '../components/Header';
import {
  useBooksQuery,
  useDeleteBookMutation,
  useRegisterBookMutation,
} from '../generated/client-api';

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

  const initialState = { title: '', author: '' };
  const [newBook, setNewBook] = useState(initialState);
  const [registerBook] = useRegisterBookMutation({
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

  const handleRegister = async (book: { title: string; author: string }) => {
    if (!book.title) throw new Error('title is empty');
    if (!book.author) throw new Error('author is empty');
    const result = await registerBook({ variables: { ...book } });
    console.log(result);
  };

  return (
    <Grid container justify="center">
      <Grid container item xs={12}>
        <Header onRefreshClick={() => refetch()} />
      </Grid>
      <Grid container item xs={12}>
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
              <TableRow key="new">
                <TableCell component="th" scope="row">
                  <TextField
                    required
                    label="title"
                    value={newBook.title}
                    onChange={(e) => {
                      e.preventDefault();
                      setNewBook({
                        ...newBook,
                        title: e.target.value,
                      });
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    required
                    label="author"
                    value={newBook.author}
                    onChange={(e) => {
                      e.preventDefault();
                      setNewBook({
                        ...newBook,
                        author: e.target.value,
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      handleRegister(newBook).then(
                        () => setNewBook(initialState),
                        (reject) => console.error(reject)
                      );
                    }}
                    color="primary"
                  >
                    <Add />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default App;
