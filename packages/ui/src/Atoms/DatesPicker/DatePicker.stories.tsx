import { DatesPicker } from "./DatesPicker";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Atoms/DatesPicker",
  component: DatesPicker,
  argTypes: {},
} as ComponentMeta<typeof DatesPicker>;

const Template: ComponentStory<typeof DatesPicker> = ({ value, label, onChange, ...rest }) => {
  const [date, setValue] = useState<Date>(new Date());
  return <DatesPicker {...rest} value={`${date}}`} label={"Date"} onChange={(v) => setValue(v)} />;
};

export const Primary = Template.bind({});

export const minAge = Template.bind({});
minAge.args = {
  minAge: 18,
};
