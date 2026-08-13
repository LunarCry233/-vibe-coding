# 个人网站

一个纯 HTML / CSS / JS 的个人网站，包含主页、关于我、作品集、联系我四个页面。设计风格：简洁、专业、深蓝强调色，移动端适配。默认部署平台：**Vercel**。

## 项目结构

```
├── index.html            # 主页
├── about.html            # 关于我
├── portfolio.html        # 作品集
├── contact.html          # 联系我（含 Formspree 表单）
├── 404.html              # 404 页面
├── css/style.css         # 全局样式（CSS 变量 + 响应式）
├── js/main.js            # 移动端导航、平滑滚动、滚动渐入、表单提交
├── favicon.svg           # 站点图标
└── assets/
    ├── images/
    │   ├── avatar.jpg    # 头像（占位，请替换）
    │   └── projects/     # 作品封面（占位，请替换）
    └── files/
        └── resume.pdf    # 简历（占位，请替换）
```

## 本地预览

在项目根目录启动静态服务器：

```bash
# 方式一：Python
python -m http.server 8080
# 浏览器打开 http://localhost:8080

# 方式二：VS Code 安装 Live Server 扩展后，右键 index.html 选择 Open with Live Server
```

## 替换占位内容

发布前需要把以下占位内容替换为真实信息（HTML 文件中已用 `TODO` 注释标注）：

1. **姓名与简介**：全局搜索「张三」，替换为你的名字；更新主页 Hero 与简介文案。
2. **头像**：用你的照片替换 `assets/images/avatar.jpg`（建议 1:1 正方形，400px 以上）。
3. **作品**：在 `portfolio.html`（及 `index.html` 精选区）中，替换项目封面图、名称、简介、技术标签，并把 GitHub / 预览链接换成真实地址。新增作品时复制一个 `<article class="card">` 即可。
4. **联系方式**：在 `contact.html` 和所有页面的页脚中，把 `hello@example.com`、`github.com/yourname`、微信 ID 替换为真实信息。
5. **简历**：用真实简历替换 `assets/files/resume.pdf`。
6. **经历与技能**：在 `about.html` 中替换时间线、技能清单。

## 联系表单配置（Formspree）

表单使用 **Formspree**（免费，适配任何静态托管平台），需要两步配置：

1. 注册 [formspree.io](https://formspree.io)，新建一个表单，拿到形如 `https://formspree.io/f/abcdwxyz` 的地址。
2. 打开 `contact.html`，把表单 `action` 中的 `YOUR_FORM_ID` 替换为真实 ID（文件内有 `TODO` 注释提示）。

配置完成后，访客提交留言会直接发送到你的邮箱。表单默认通过 AJAX 提交，不跳转页面，成功/失败都有提示。

## 部署到 Vercel（推荐，二选一）

### 方式 A：GitHub → Vercel 自动部署（推荐，无需本地 Node）

1. 在 GitHub 新建一个公开/私有仓库（如 `personal-website`），把本项目推送上去。
2. 登录 [vercel.com](https://vercel.com)，点击 **Add New → Project**，选择 **Import** 刚推送的 GitHub 仓库。
3. Framework Preset 保持默认 **Other** 即可（纯静态站，无构建命令）。
4. 点击 **Deploy**，约 1 分钟即可上线，Vercel 自动配置 HTTPS 域名。
5. 之后每次 `git push`，Vercel 自动重新部署。

### 方式 B：Vercel CLI（需要 Node.js）

```bash
npm install -g vercel
vercel login          # 浏览器登录一次
vercel --prod         # 在项目根目录执行，首次会询问项目名称等，一路回车即可
```

## 测试清单（上线前）

- [ ] 4 个页面可访问，导航跳转正确，无 404 死链
- [ ] 手机宽度（375px）下布局正常，文字不溢出，导航菜单可展开/收起
- [ ] 桌面宽度（1440px）下排版正常，卡片 hover 效果正常
- [ ] 联系表单配置后能提交成功并收到邮件
- [ ] 页面标题与 favicon 正确显示

## 技术说明

- 无框架、无构建步骤，纯静态文件，部署到任意静态托管平台均可（Vercel / Netlify / GitHub Pages 等）。
- 样式使用 CSS 变量统一管理颜色与间距；布局使用 Flexbox / Grid。
- JavaScript 仅用于：页脚年份、移动端导航开关、站内锚点平滑滚动、滚动渐入（尊重系统「减少动效」设置）、联系表单提交。
- 若改用 Netlify：把表单换成 Netlify Forms（`data-netlify="true"`），其余代码无需改动。
