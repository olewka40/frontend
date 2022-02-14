import { Autocomplete } from '@mui/material';

import { styled } from '../styles';
// import { Theme } from '../theme';

import { AutocompleteProps } from './types';

type StyledAutocompleteProps = Omit<AutocompleteProps, 'color'> & {};

// type StyledAutocompleteThemeProps = StyledAutocompleteProps & { theme: Theme };
export const StyledAutocomplete = styled(Autocomplete)<StyledAutocompleteProps>`
  display: flex;
`;
