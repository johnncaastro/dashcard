import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { Sidebar } from './components/Sidebar/sidebar.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="max-w-app grid-cols-app grid min-h-screen">
    <Sidebar />
    <main className="pr-18 py-11 pl-20">
      <App />
    </main>
  </div>,
)
