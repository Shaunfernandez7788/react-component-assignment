import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'ghost'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    label: 'Primary Input',
    placeholder: 'Enter text...',
    helperText: 'This is a helper text.',
  },
};

export const Invalid: Story = {
  args: {
    ...Primary.args,
    label: 'Invalid Input',
    invalid: true,
    errorMessage: 'This field has an error.',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: 'Disabled Input',
    disabled: true,
  },
};

export const FilledVariant: Story = {
  args: {
    ...Primary.args,
    label: 'Filled Variant',
    variant: 'filled',
  },
};

export const LargeSize: Story = {
  args: {
    ...Primary.args,
    label: 'Large Input',
    size: 'lg',
  },
};