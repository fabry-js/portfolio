import React from 'react';
import { useHistory } from 'react-router';

interface FourZeroFourProps {}

const FourZeroFour: React.FC<FourZeroFourProps> = () =>{
  const history = useHistory();
  history.goBack();
  return (
    <p>Oh No 😱! Page Not Found! Let's go back!</p>
  );
}

export default FourZeroFour