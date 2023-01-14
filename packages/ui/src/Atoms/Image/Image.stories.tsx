import { Image } from "./Image";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import logo from "../../assets/logohrnet.jpeg";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: logo,
  alt: "logo",
  width: "100px",
};
