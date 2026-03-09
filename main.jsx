import "@quietmind/mdx-docs/index.css";
import { createApp } from "@quietmind/mdx-docs";

import { pages } from "./config/pages.js";
import { site } from "./config/site.js";

createApp({ pages, site });
