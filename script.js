document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (event.target.matches("[data-toggle='collapse']")) {
            const button = event.target;
            const textContainer = button.closest(".textContainer");

            // 切換展開狀態
            const isExpanded = textContainer.getAttribute("data-expanded") === "true";
            textContainer.setAttribute("data-expanded", !isExpanded);

            // 如果展開，移除按鈕
            if (!isExpanded) {
                button.remove();
            }
        }
    });
});
