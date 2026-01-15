// toast类型与内容映射
const toastTypes = {
  tip: {
    class: "help",
    title: "Help!",
    content:
      'Do you have a problem? Just use this <a href="#">contact form</a>.',
  },
  success: {
    class: "success",
    title: "Success!",
    content: "Your message has been sent successfully.",
  },
  warning: {
    class: "warning",
    title: "Warning!",
    content: "Sorry, there was a problem with your request.",
  },
  error: {
    class: "error",
    title: "Error!",
    content: "Change a few thing up and try submitting again.",
  },
};

function createToast(type) {
  const toastInfo = toastTypes[type];
  if (!toastInfo) return;
  const toastPanel = document.querySelector(".toast-panel");
  // 创建toast-item
  const toastItem = document.createElement("div");
  toastItem.className = `toast-item ${toastInfo.class}`;
  toastItem.style.maxHeight = "0";
  toastItem.style.opacity = "0";
  toastItem.style.transition = "all 0.5s ease";

  // 创建toast内容
  const toast = document.createElement("div");
  toast.className = `toast ${toastInfo.class}`;

  // 关闭按钮
  const closeBtn = document.createElement("label");
  closeBtn.className = "close";
  closeBtn.innerHTML = "";
  closeBtn.style.cursor = "pointer";
  closeBtn.onclick = function () {
    toastItem.style.maxHeight = "0";
    toastItem.style.opacity = "0";
    setTimeout(() => {
      toastPanel.removeChild(toastItem);
    }, 500);
  };

  // 标题
  const h3 = document.createElement("h3");
  h3.innerText = toastInfo.title;
  // 内容
  const p = document.createElement("p");
  p.innerHTML = toastInfo.content;

  toast.appendChild(closeBtn);
  toast.appendChild(h3);
  toast.appendChild(p);
  toastItem.appendChild(toast);
  toastPanel.appendChild(toastItem);

  // 动画显示
  setTimeout(() => {
    toastItem.style.maxHeight = "200px";
    toastItem.style.opacity = "1";
  }, 10);
  // 自动关闭（可选，5秒后自动关闭，多个toast依次关闭）
  // 计算当前toast在面板中的索引，依次延迟关闭
  const items = Array.from(toastPanel.querySelectorAll(".toast-item"));
  const index = items.indexOf(toastItem);
  const delay = 5000 + index * 800; // 每个toast多延迟0.8秒

  setTimeout(() => {
    if (toastPanel.contains(toastItem)) {
      toastItem.style.maxHeight = "0";
      toastItem.style.opacity = "0";
      setTimeout(() => {
        if (toastPanel.contains(toastItem)) toastPanel.removeChild(toastItem);
      }, 500);
    }
  }, delay);
}

// 绑定按钮事件
document.getElementById("tip").addEventListener("click", function () {
  createToast("tip");
});
document.getElementById("success").addEventListener("click", function () {
  createToast("success");
});
document.getElementById("warning").addEventListener("click", function () {
  createToast("warning");
});
document.getElementById("error").addEventListener("click", function () {
  createToast("error");
});
