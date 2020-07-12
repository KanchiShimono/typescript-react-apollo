/* eslint-disable @typescript-eslint/no-var-requires */
const { printSchema } = require('graphql');

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  plugin: (schema, documents, config) => {
    return [
      'import gql from "graphql-tag";',
      '',
      'export const typeDefs = gql`',
      printSchema(schema),
      '`;',
      '',
    ].join('\n');
  },
};
