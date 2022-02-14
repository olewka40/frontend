import { AutocompleteColors } from './constants';

export type AutocompleteColor = `${AutocompleteColors}`;

export type AutocompleteProps = {
  color: AutocompleteColor;
};
