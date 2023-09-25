import React from 'react';
import terms from '../../public/doc/internal/terms';

const Terms = (props) => {
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [validCc, setValidCc] = React.useState(true);

  const [cartMessages, setCartMessages] = React.useState([]);

  return (
    <React.Fragment>
      s<div>{terms}</div>
    </React.Fragment>
  );
};

export default Terms;
