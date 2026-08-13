# 个人网站（新能源材料与器件 · 学生模板）

一个纯 HTML / CSS / JS 的静态个人网站，包含主页、关于我、作品集、联系我四个页面。设计风格：简洁、专业、深蓝强调色，移动端适配。部署平台：**Vercel**（GitHub 导入，自动部署）。

**站点定位**：广东工业大学（GDUT）材料与能源学院 · 新能源材料与器件专业大二学生。内容围绕学习成长、软件技能、竞赛规划与深圳大学新材料半导体方向升学目标展开。

**当前版本**：v0.2 —— 新能源材料与器件学生模板（GitHub 对应标签 / Release：`v0.2`）

## 项目结构

```
├── index.html            # 主页（Hero、近期目标、简介、技能亮点）
├── about.html            # 关于我（简介、院校信息、成长路线、技能清单）
├── portfolio.html        # 作品集（当前为学习/竞赛规划，有真实作品后替换为作品卡片）
├── contact.html          # 联系我（邮箱、Formspree 表单、社交链接）
├── 404.html              # 404 页面
├── css/style.css         # 全局样式（CSS 变量 + 响应式）
├── js/main.js            # 移动端导航、平滑滚动、滚动渐入、表单提交
├── favicon.svg           # 站点图标
└── assets/
    └── files/
        └── resume.pdf    # 简历（占位，待替换）
```

> 注：`assets/images/` 目前未被页面引用（头像已按需移除；有真实作品后可在 `portfolio.html` 中添加封面图）。`内容清单.md` 是本地工作文档（已 gitignore，不上传、不部署）。

## 本地预览

```bash
python -m http.server 8080     # 在项目根目录执行
# 浏览器打开 http://localhost:8080
```

## 剩余待补充内容

大部分模板内容已按学生情况填好，还剩：

1. **真实姓名**：全站目前用「张三」占位（`TODO` 注释标注）。
2. **微信**（可选）：`contact.html` 中当前为「待补充」。
3. **Formspree 表单 ID**：见下方「联系表单配置」。
4. **简历**：替换 `assets/files/resume.pdf`。

## 联系表单配置（Formspree）

静态网站没有后端，表单提交需要第三方服务转发到邮箱。表单使用 **Formspree**（免费，每月 50 条）：

1. 注册 [formspree.io](https://formspree.io)，新建一个表单，拿到形如 `https://formspree.io/f/abcdwxyz` 的地址。
2. 打开 `contact.html`，把表单 `action` 中的 `YOUR_FORM_ID` 替换为真实 ID。

配置完成后，访客提交留言会发送到你的邮箱；表单通过 AJAX 提交，不跳转页面，成功/失败有提示。若不需要留言表单，可删除表单、只保留邮箱链接。

## 版本迭代工作流

### 本地 git（推荐习惯）

- **main = 稳定可部署版**，改动先开功能分支，完成后再合并回 main 并打 tag：

```bash
git switch -c feature/v0.3-主题   # 1. 开分支
# …改文件…
git add .
git commit -m "v0.3: 说明"
git switch main                    # 2. 回 main
git merge --no-ff feature/v0.3-主题 # 3. 合并（保留合并记录）
git tag v0.3                       # 4. 打版本标签
git branch -d feature/v0.3-主题     # 5. 清理分支
```

- 查看/回退：`git log --oneline`、`git revert <commit>`。

### GitHub 网页操作（当前上传方式）

1. **开分支**：仓库页左上角分支下拉框 → 输入新分支名 → Create branch。
2. **传文件**：确认下拉框选中新分支 → Add file → Upload files → Commit。
3. **发 PR**：顶部黄条 **Compare & pull request** → Create pull request。
4. **合并**：PR 页 **Merge pull request**（选 Create a merge commit，对应本地 `--no-ff`）→ Delete branch。
5. **打标签**：仓库右侧 **Releases → Draft a new release** → 输入 tag（如 v0.3）→ Publish release。

### Vercel 联动

- 上传/推送到 **main** → Vercel 自动**正式部署**（production）。
- 往**分支**上传或发 PR → Vercel 自动生成**预览地址**（在 PR 页查看），可先看效果再合并上线。

## 部署到 Vercel

1. 项目已在 [vercel.com](https://vercel.com) 导入 GitHub 仓库 `LunarCry233/-vibe-coding`。
2. 之后更新：把改动的 HTML/CSS/JS 上传到 GitHub 仓库（main 或按上文流程走分支+PR），Vercel 自动重新部署。
3. 如需 `git push` 直接部署，可配置 SSH 走 443 端口（`ssh.github.com:443`，绕过本机对 github.com 的封锁）。

## 测试清单（上线前）

- [ ] 4 个页面可访问，导航跳转正确，无 404 死链
- [ ] 手机宽度（375px）下布局正常，文字不溢出，导航菜单可展开/收起
- [ ] 桌面宽度（1440px）下排版正常，卡片 hover 效果正常
- [ ] 联系表单配置后能提交成功并收到邮件
- [ ] 页面标题与 favicon 正确显示

## 更新日志

### v0.2 — 新能源材料与器件学生模板（2026-08）
- 重构内容定位为新能源材料与器件专业大二学生（广东工业大学材料与能源学院）
- 新增升学目标：深圳大学新材料半导体方向
- 新增技能清单（MATLAB、SolidWorks、AutoCAD、Origin、Office、VS Code、Codex、LaTeX）与竞赛规划（数模 / 国才杯 / 蓝桥杯）
- 作品集改为「规划 + 未来作品」形态
- 更新联系方式；移除头像显示
- 待补充：真实姓名、Formspree 表单、简历 PDF

### v0.1 — 初始版本（2026-08）
- 搭建四页面 + 404 静态站骨架（主页 / 关于我 / 作品集 / 联系我）
- 建立全局样式、响应式布局与移动端导航

## 技术说明

- 无框架、无构建步骤，纯静态文件，部署到任意静态托管平台均可（Vercel / Netlify / GitHub Pages 等）。
- 样式使用 CSS 变量统一管理颜色与间距；布局使用 Flexbox / Grid。
- JavaScript 仅用于：页脚年份、移动端导航开关、站内锚点平滑滚动、滚动渐入（尊重系统「减少动效」设置）、联系表单提交。
- 若改用 Netlify：把表单换成 Netlify Forms（`data-netlify="true"`），其余代码无需改动。
