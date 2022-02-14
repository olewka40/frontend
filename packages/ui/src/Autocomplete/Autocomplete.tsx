import { StyledAutocomplete } from './styled';
import { AutocompleteProps } from './types';

export const Autocomplete = ({ ...props }: AutocompleteProps) => {
  return <StyledAutocomplete {...props} />;
};
