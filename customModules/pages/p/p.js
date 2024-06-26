/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';

const pageName = 'p';

export const page = (props) => {
  return (
    <div pagename={pageName}>
      <div>
        {/* Put Children Here for this page */}
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default page;
