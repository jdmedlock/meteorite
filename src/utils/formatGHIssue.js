// Format the body of the GitHub issue using Markdown 
const formatGHIssue = (title, info, error) => {
  return {
    'token': process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
    'body': 
      `**User:** user123 <br/><br/> \
       **Environment Info:** <br/>\
       Platform=${window.navigator.platform} OS=${window.navigator.oscpu} <br/> \
       BuildID=${window.navigator.buildID} <br/> \
       Online=${window.navigator.onLine} <br/> \
       Language=${window.navigator.language} <br/><br/> \
       **${error.toString()}** <br/><br/> \
       **Component error was detected in:** <br/> \
       ${JSON.stringify(info, null, 2).replace(/\\r/g, '<br/>').replace(/\\n/g, '<br/>')} <br/><br/>`,
    'labels': ['bug'],
  };
};

export { formatGHIssue };