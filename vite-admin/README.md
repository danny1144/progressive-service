## 重建node-sass

```
npm rebuild node-sass
```
## 支持vue3

```
vue add vue-next
```
## npm install 错误 | gyp ERR! configure error
```
sudo npm i --unsafe-perm
npm install --global --production windows-build-tools
```

## ui框架 采用antdv 支持vue3
```
npm i --save ant-design-vue@next
```

 *** 
 vite build error: Uncaught SyntaxError: The requested module '/@modules/tinycolor2/tinycolor.js' does not provide an export named 'default' #2798 
 ***

```javascript
解决方式: 确保 tinycolor2 被 bundle.
(ant-design-vue 中引用 tinycolor2 已被 bundle, @ant-design/colors 包里也有引用，未bundle)
添加 vite.config.ts
import { UserConfig } from 'vite'

const config: UserConfig = {
  optimizeDeps: {
    include: ['@ant-design/colors'],
  },
}

export default config
或者 2. package.json 中添加 @ant-design/colors

yarn add @ant-design/colors
it works! thanks
```
 
 ## vue3常见问题汇总

 https://blog.csdn.net/qq_39953537/article/details/105754630