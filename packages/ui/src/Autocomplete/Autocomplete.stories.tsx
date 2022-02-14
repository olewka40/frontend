import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { TextField } from '../TextField';

import { Autocomplete } from './Autocomplete';

const variants: any = [
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  {
    label: 'Вариант Выбора',
  },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
  { label: 'Вариант Выбора' },
];

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

const Template: Story = (args) => <Autocomplete {...args} />;

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <Autocomplete
      options={variants}
      renderInput={(params: any) => <TextField {...params} label="Movie" />}
    />
  </Stack>
);

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
