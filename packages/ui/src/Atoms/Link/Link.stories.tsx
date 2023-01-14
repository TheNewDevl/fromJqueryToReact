import { Link } from "./Link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    path: {
      description: "The path to navigate to",
    },
    children: {
      control: {
        type: "text",
      },
    },
  },

  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Default Link",
};
