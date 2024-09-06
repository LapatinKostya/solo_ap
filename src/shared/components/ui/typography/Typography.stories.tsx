import { Typography } from './Typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Typography,
  title: 'Components/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: `Typography large as p (default)`,
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: `Typography H1 as p (default)`,
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: `Typography H2 as p (default)`,
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: `Typography H2 as p (default)`,
    variant: 'h3',
  },
}

export const RegularText16: Story = {
  args: {
    children: `Typography regular_text_16 as p (default)`,
    variant: 'regular_text_16',
  },
}

export const BoldText16: Story = {
  args: {
    children: `Typography bold_text_16 as p (default)`,
    variant: 'bold_text_16',
  },
}

export const RegularText14: Story = {
  args: {
    children: `Typography regular_text_14 as p (default)`,
    variant: 'regular_text_14',
  },
}

export const MediumText14: Story = {
  args: {
    children: `Typography medium_text_14 as p (default)`,
    variant: 'medium_text_14',
  },
}

export const BoldText14: Story = {
  args: {
    children: `Typography bold_text_14 as p (default)`,
    variant: 'bold_text_14',
  },
}

export const SmallText: Story = {
  args: {
    children: `Typography small_text as p (default)`,
    variant: 'small_text',
  },
}

export const SemiboldSmallText: Story = {
  args: {
    children: `Typography semibold_small_text as p (default)`,
    variant: 'semibold_small_text',
  },
}

export const RegularLink: Story = {
  args: {
    asChild: true,
    children: (
      <a
        href={'#'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {`Typography regular_link as a`}
      </a>
    ),
    variant: 'regular_link',
  },
}

export const SmallLink: Story = {
  args: {
    asChild: true,
    children: (
      <a
        href={'#'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {`Typography small_link as a`}
      </a>
    ),
    variant: 'small_link',
  },
}
