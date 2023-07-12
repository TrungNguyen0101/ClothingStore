'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

function LayoutAuthen({ children }) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('account'));
    if (user !== null) {
      router.push('/');
      window.location.reload();
    }
    return <div>{children}</div>;
  }
}
LayoutAuthen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAuthen;
