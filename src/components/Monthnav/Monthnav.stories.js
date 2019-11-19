import React from "react";
import { storiesOf } from "@storybook/react";

import Monthnav from "./Monthnav";

storiesOf("Button", module)
    .add("Default", () => <Monthnav
        type="default"
    />)