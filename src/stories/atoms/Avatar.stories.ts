import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";

import  { Avatar, AvatarProps } from "@/components/atoms";


const meta = {
    parameters: {
      layout: "centered",
    },
    title: "Components/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
      src: {
        type: "string",
      },
      fallback: {
        type: "string",
      },
        alt: {
            type: "string",
        },
   
    },
    
  } satisfies Meta<typeof Avatar>;
  

  export default meta;
  type Story = StoryObj<typeof meta>;


  export const Default: Story = {
    args: {
      src: "https://avatars.githubusercontent.com/u/103594555?v=4",
      alt: "User Avatar",
    },
  };

export const WithFallback: Story = {
    args: {
      src: "xxx",
      alt: "User Avatar",
      fallback: "AC",
    },
  };