import { FormContainer } from "./FormContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/FormContainer",
  component: FormContainer,
  argTypes: {},
} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => <FormContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
