# Element UI 贡献指南

Hi! 首先感谢你使用 Element UI。

Element UI 是一套为开发者、设计师和产品经理准备的开源组件库，旨在快速搭建页面。它基于 Vue 2.0 开发，并提供了配套的设计资源，充分满足可定制化的需求。

Element UI 的成长离不开大家的支持，如果你愿意为 Element UI 贡献代码或提供建议，请阅读以下内容。

## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。

- **不要提交** `lib` 里面打包的文件。

- 执行 `npm run dist` 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 `dev` 分支，而不是 `master` 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。

## 开发环境搭建
首先你需要 Node.js 和 npm。
```shell
git clone git@github.com/vueZZ/element-demo.git
npm run dev
```

打包代码：

```shell
npm run dist
```

## 组件库目录

- build：这个目录主要用来存放构建相关的文件
- packages： 这个目录下主要用来存放所有组件
- examples：这个目录下主要用来存放组件库的展示 demo 和 文档的所有相关文件
- src：这个目录主要用来管理组件的注册的主入口，工具，mixins等（对此我们需要改造初始化出来的 src 目录）
- lib：组件库打包出来后的目录
- test：这个目录用来存放测试案例（继续延用初始化出来的目录）
- .github：作为一个开源组件库，如果你想和别人一起开发，那么这个目录用来存放你自己定义的一些开发规则指导，也是非常不错的