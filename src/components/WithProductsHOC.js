import React from 'react';

const withProductsHOC = (WrappedComponent, categ) => {
  return () => {
    return <WrappedComponent categ={categ} />;
  };
};

export default withProductsHOC;
