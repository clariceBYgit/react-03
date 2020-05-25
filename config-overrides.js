// module.exports = (config) =>{
//   // 若没有使用在custmoize-cra,这里可以对config进行配置
//   return config
// }



// 若使用了custmoize-cra,就进行如下操作

const { override,addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy( //配置高阶组件的装饰器模式
    [ 
      '@babel/plugin-proposal-decorators',
      {
        legacy:true
      }

  ])
)

