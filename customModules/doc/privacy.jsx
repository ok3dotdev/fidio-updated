import React from 'react';

import privacy from '../../public/doc/internal/privacy';

const Privacy = (props) => {
  const [fetchBusy, setFetchBusy] = React.useState(false);

  const [pageError, setPageError] = React.useState(null);

  const [validCc, setValidCc] = React.useState(true);

  const [cartMessages, setCartMessages] = React.useState([]);

  return (
    <React.Fragment>
      <div>{privacy}</div>
    </React.Fragment>
  );
};

export default Privacy;
