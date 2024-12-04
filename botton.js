document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (event.target.matches("[data-toggle='collapse']")) {
            const button = event.target;
            const textContainer = button.closest(".textContainer");

            // 切換展開狀態
            const isExpanded = textContainer.getAttribute("data-expanded") === "true";
            textContainer.setAttribute("data-expanded", !isExpanded);

            // 更新按鈕文字
            button.textContent = isExpanded ? "Read More" : "Read Less";
        }
    });
});
