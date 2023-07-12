'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

function LayoutPrive({ children }) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('account'));
    if (user === null) {
      router.push('/signin');
    }
    return <div>{children}</div>;
  }
}
LayoutPrive.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPrive;
