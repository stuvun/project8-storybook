import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "./Accordion";

storiesOf("Accordion", module)
    .add("Default", () => <Accordion
        type="default"
        label="default"
        />)
    .add('Primary', () => <Accordion
        type="primary"
        label="primary"
    />)