import * as PropTypes from 'prop-types';
import * as React from 'react';

const Link = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: any;
  onClick: any;
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
