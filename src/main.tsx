import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import TodoApp from "@/TodoApp.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    // React.StrictMode 為「嚴格模式」，確保開發人員在建立 React 應用程式時遵循 React 最佳實踐。
    // 嚴格模式可以幫助識別開發過程中應用程式中的潛在問題，並可能在運行時記錄警告訊息。
    <React.StrictMode>
        <TodoApp/>
    </React.StrictMode>
)
