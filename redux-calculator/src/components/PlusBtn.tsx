import * as PropTypes from 'prop-types';
import * as React from 'react';

const PlusBtn = ({ onClick }: { onClick: any }) => (
  <button onClick={onClick}>+</button>
);

PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusBtn;
