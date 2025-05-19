import { app, BrowserWindow } from 'electron'
import path from 'path'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  // 개발 환경에서는 localhost:3000을 로드
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000')
    // 개발자 도구를 엽니다
    win.webContents.openDevTools()
  } else {
    // 프로덕션 환경에서는 빌드된 Next.js 앱을 로드
    win.loadFile(path.join(__dirname, '../.next/server/pages/index.html'))
  }
}

app.whenReady().then(createWindow)

// macOS에서는 모든 창이 닫혀도 앱이 계속 실행됩니다
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS에서는 dock 아이콘을 클릭하면 창이 다시 열립니다
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) 