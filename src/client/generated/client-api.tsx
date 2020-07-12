import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  title: Scalars['ID'];
  author: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  book?: Maybe<Book>;
};


export type QueryBookArgs = {
  title: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
};


export type MutationRegisterBookArgs = {
  title: Scalars['ID'];
  author: Scalars['String'];
};


export type MutationDeleteBookArgs = {
  title: Scalars['ID'];
};

export type DeleteBookMutationVariables = Exact<{
  title: Scalars['ID'];
}>;


export type DeleteBookMutation = (
  { __typename?: 'Mutation' }
  & { deleteBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);

export type RegisterBookMutationVariables = Exact<{
  title: Scalars['ID'];
  author: Scalars['String'];
}>;


export type RegisterBookMutation = (
  { __typename?: 'Mutation' }
  & { registerBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);

export type BookQueryVariables = Exact<{
  title: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )>>> }
);


export const DeleteBookDocument = gql`
    mutation DeleteBook($title: ID!) {
  deleteBook(title: $title) {
    title
    author
  }
}
    `;
export type DeleteBookMutationFn = ApolloReactCommon.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, baseOptions);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = ApolloReactCommon.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const RegisterBookDocument = gql`
    mutation RegisterBook($title: ID!, $author: String!) {
  registerBook(title: $title, author: $author) {
    title
    author
  }
}
    `;
export type RegisterBookMutationFn = ApolloReactCommon.MutationFunction<RegisterBookMutation, RegisterBookMutationVariables>;

/**
 * __useRegisterBookMutation__
 *
 * To run a mutation, you first call `useRegisterBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerBookMutation, { data, loading, error }] = useRegisterBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useRegisterBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterBookMutation, RegisterBookMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterBookMutation, RegisterBookMutationVariables>(RegisterBookDocument, baseOptions);
      }
export type RegisterBookMutationHookResult = ReturnType<typeof useRegisterBookMutation>;
export type RegisterBookMutationResult = ApolloReactCommon.MutationResult<RegisterBookMutation>;
export type RegisterBookMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterBookMutation, RegisterBookMutationVariables>;
export const BookDocument = gql`
    query Book($title: ID!) {
  book(title: $title) {
    title
    author
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useBookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return ApolloReactHooks.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = ApolloReactCommon.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
    query Books {
  books {
    title
    author
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return ApolloReactHooks.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;