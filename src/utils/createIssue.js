import createGHIssue from 'github-create-issue';
import { formatGHIssue } from './formatGHIssue';

const createIssue = async (title, info, error) => {
  const opts = formatGHIssue(title, info, error);
  let issueIsCreated = new Promise((resolve, reject) => {
    createGHIssue( process.env.REACT_APP_GITHUB_REPO, title, opts, ( error, issue, info ) => {
      if ( info && process.env.NODE_ENV === 'development') {
          console.error( 'Limit: %d', info.limit );
          console.error( 'Remaining: %d', info.remaining );
          console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
      }
      if ( error ) {
          throw new Error( error.message );
      }
      if (process.env.NODE_ENV === 'development') {
        console.log( JSON.stringify(issue));
      }
      resolve(issue);
    });
  });

  let issue = await issueIsCreated;
  return issue;
};

export { createIssue };