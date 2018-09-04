import React from "react";
import { launch } from "@sencha/ext-react";
import { ExtReact } from "@sencha/ext-react";
import { Panel } from "@sencha/ext-classic";

const Bad = () => (
  <ExtReact>
    <div>213</div>
  </ExtReact>
);

const Good = () => (
  <ExtReact>
    <Panel>213</Panel>
  </ExtReact>
);

launch(<Bad />);
