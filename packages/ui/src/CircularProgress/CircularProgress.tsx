import { StyledLoader } from './styled';
import { LoaderProps } from './types';

export const Loader = ({color, size, ...props}: LoaderProps) => {
    return (
        <StyledLoader {...props} customSize={size} customColor={color} />
    );
  };
  
  export default Loader;