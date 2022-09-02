import { createRoot } from 'react-dom/client';
import { Index } from './modules/index';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
