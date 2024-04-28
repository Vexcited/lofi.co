/* @refresh reload */
import "@unocss/reset/tailwind.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "virtual:uno.css";

import { render } from 'solid-js/web';
import Application from './views/Application';

render(
  () => <Application />,
  document.getElementById('root') as HTMLDivElement
);
