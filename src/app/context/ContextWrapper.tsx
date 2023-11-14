import React, { ReactElement } from 'react';

import WpcasContext from '@/app/context/WpcasContext';

interface ContextWrapperProps {
  children: ReactElement;
}

const ContextWrapper = ({ children }: ContextWrapperProps) => {
  return <WpcasContext>{children}</WpcasContext>;
};

export default ContextWrapper;
