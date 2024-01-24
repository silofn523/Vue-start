const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// http://localhost:8000/api   <  '/api

// const target = 'http://localhost:8000' // 이부분은 개발자 모드로 백엔드와 통신할때 쓰임
// module.exports - {
//   devServer: {
//     port: 8000,
//     proxy: {
//       '/api': {
//         target,
//         changOrigin: true
//       }
//     }
//   }
// } 
