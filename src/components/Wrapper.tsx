import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/colors';

interface WrapperProps {
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
  <StyledWrapper className={className}>{children}</StyledWrapper>
);

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${colors.holoBackground}
`;

