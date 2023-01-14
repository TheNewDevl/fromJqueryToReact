import { Header } from "./Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "src/Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
