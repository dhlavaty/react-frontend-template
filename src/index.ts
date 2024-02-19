import { createElement } from "react";
import { createRoot } from "react-dom/client";

import { root } from "./root";

document.body.innerHTML = '<div id="app"></div>';

const rootEl = createRoot(document.getElementById("app")!);
rootEl.render(createElement(root));
