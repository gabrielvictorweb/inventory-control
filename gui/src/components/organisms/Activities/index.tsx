import React from 'react';
import { Activity } from '@/components';
import * as S from './styles';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

export const Activities: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [close, setClose] = React.useState(true);

  const onAnimationComplete = () => {
    if (!isOpen) {
      setClose(true);
    }
  };

  if (close) return <></>;

  return (
    <S.Container>
    </S.Container>
  );
};
