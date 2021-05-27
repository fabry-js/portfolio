import React from 'react';
import Home from '../pages/Home';

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({children}) =>{
  return (
    <div>
      <Home />
    </div>
  );
}

export default Providers