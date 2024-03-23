import React from 'react';
import { Shop } from '../ecommerce/shop';
const Module = props => {
  return <div>
            <Shop {...props} profile={true}></Shop>
        </div>;
};
export default Module;