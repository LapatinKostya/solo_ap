import { Button } from './Button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    disabled: false,
  },
}
export const PrimaryDisabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    disabled: false,
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}
export const Text: Story = {
  args: {
    ...Primary.args,
    variant: 'text',
  },
}

export const AsLink: Story = {
  args: {
    ...Primary.args,
    variant: 'text',
    asChild: true,
    children: <a href={'/'}>Link button</a>,
  },
}
