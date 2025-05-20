module.exports = {
    webpack: (defaultConfig) => {
      return {
        ...defaultConfig,
        entry: {
          background: './main/background.js',
          preload: './main/preload.js',
        },
      }
    },
    // 개발 모드에서 Electron 창이 제대로 열리도록 설정
    electron: {
      main: {
        entry: './main/background.js',
      },
    },
  }