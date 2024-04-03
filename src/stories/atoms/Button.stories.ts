import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "@/components/atoms";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
    variant: {
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      control: {
        type: "radio",
        
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "radio",
        
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "download",
    variant: "secondary",
    
  },
};

export const Destructive: Story = {
  args: {
    children: "download",
    variant: "destructive",
    
  },
};

export const Ghost: Story = {
  args: {
    children: "download",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "download",
    variant: "link",
  },
};
