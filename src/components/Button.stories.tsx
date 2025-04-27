// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta<ButtonProps>;

export const Primary: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'Primary Button',
  variant: 'primary'
};

export const Secondary: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary'
};
