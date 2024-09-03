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
    children: 'Primary',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    ...Primary.args,
    children: 'Outline',
    variant: 'outline',
  },
}

export const AsLink: Story = {
  args: {
    ...Primary.args,
    variant: 'link',
    asChild: true,
    children: <a href={'/'}>Link button</a>,
  },
}
