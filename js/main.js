/* ============================================================
   个人网站脚本：页脚年份 / 移动端导航 / 平滑滚动 / 滚动渐入
   ============================================================ */
(function () {
  "use strict";

  // 页脚年份
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 移动端导航开关
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    });
    // 点击菜单项后自动收起
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "打开菜单");
      }
    });
  }

  // 站内锚点平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // 滚动渐入（尊重减少动效偏好）
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { io.observe(el); });
})();

// 占位链接守卫：aria-disabled="true" 的链接点击不跳转
document.querySelectorAll('a[aria-disabled="true"]').forEach(function (a) {
  a.addEventListener("click", function (e) { e.preventDefault(); });
});


// 联系表单（Formspree）异步提交：未配置时给出提示，已配置时静默提交
(function () {
  var form = document.querySelector('form[name="contact"]');
  if (!form) return;
  var action = form.getAttribute("action") || "";
  var notConfigured = action.indexOf("YOUR_FORM_ID") !== -1;

  var msg = document.createElement("p");
  msg.className = "form-note form-status";
  form.appendChild(msg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.className = "form-note form-status";
    msg.textContent = "";
    if (notConfigured) {
      msg.classList.add("error");
      msg.textContent = "表单尚未配置：请先在 Formspree 注册并替换 contact.html 中的 YOUR_FORM_ID。";
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = "发送中…"; }
    fetch(action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.ok) {
          form.reset();
          msg.classList.add("success");
          msg.textContent = "发送成功！我会尽快回复你。";
        } else {
          throw new Error((json.error && json.error[0]) || "提交失败");
        }
      })
      .catch(function () {
        msg.classList.add("error");
        msg.textContent = "提交失败，请稍后重试，或直接发邮件给我。";
      })
      .finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = "发送留言"; }
      });
  });
})();