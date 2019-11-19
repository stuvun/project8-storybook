import React from "react";
import { storiesOf } from "@storybook/react";

import Navbar from "./Button";

storiesOf("Button", module)
    .add("Default", () => <Navbar
        type="default"
    />)