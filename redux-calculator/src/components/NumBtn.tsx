import * as PropTypes from 'prop-types';
import * as React from 'react';

const NumBtn = ({ n, onClick }: { n: number; onClick: any }) => (
  <button onClick={onClick}>{n}</button>
);

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumBtn;
