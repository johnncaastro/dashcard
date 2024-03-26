import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { Sidebar } from './components/Sidebar/index.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="max-w-app grid-cols-app grid min-h-screen">
    <Sidebar />
    <main className="bg-white-300 py-11 pl-14 pr-10">
      <App />
    </main>
  </div>,
)
