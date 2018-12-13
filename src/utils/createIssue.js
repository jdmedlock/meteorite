import createGHIssue from 'github-create-issue';

const createIssue = (title, body) => {
  var opts = {
    'token': 'e7177ac5b68cc1bd35afdc8b5b71942fa8e652ef',
    'body': body,
    'labels': ['bug'],
  };

  createGHIssue( 'jdmedlock/meteorite', title, opts, ( error, issue, info ) => {
    // Check for rate limit information...
    if ( info ) {
        console.error( 'Limit: %d', info.limit );
        console.error( 'Remaining: %d', info.remaining );
        console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
    }
    if ( error ) {
        throw new Error( error.message );
    }
    console.log( JSON.stringify( issue ) );
  });

};

export { createIssue };