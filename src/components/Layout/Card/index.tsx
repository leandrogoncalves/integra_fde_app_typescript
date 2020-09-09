import React from 'react';

import { ContainerCard } from './styles';

const Card: React.FC = ({children, ...rest}) => {
  return (
    <ContainerCard {...rest}>
      {children}
    </ContainerCard>
  );
}

export default Card;
