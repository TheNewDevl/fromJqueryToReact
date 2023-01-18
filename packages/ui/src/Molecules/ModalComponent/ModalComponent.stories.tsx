import { ModalComponent } from "./ModalComponent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/ModalComponent",
  component: ModalComponent,
  argTypes: {},
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "This is a modal",
  isOpenModal: true,
};
