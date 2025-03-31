document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng fade-in cho trang web
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s";
    setTimeout(() => document.body.style.opacity = 1, 100);

    // Thêm sự kiện cho nút bấm
    const button = document.getElementById("actionButton");
    button.addEventListener("click", function () {
        let existingMessage = document.getElementById("groupMessage");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.id = "groupMessage";
            message.textContent = "Nhóm: Nguyễn Nhựt Hóa, Quốc Anh";
            message.style.fontSize = "18px";
            message.style.fontWeight = "bold";
            message.style.marginTop = "10px";
            message.style.animation = "fadeIn 1s";
            document.querySelector("main").appendChild(message);
        }
    });

    // Thêm hiệu ứng hover cho danh sách hướng dẫn
    let listItems = document.querySelectorAll("#instructions li");
    listItems.forEach(item => {
        item.style.transition = "background 0.3s, transform 0.2s";
        item.addEventListener("mouseover", () => {
            item.style.background = "#dff0ff";
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseout", () => {
            item.style.background = "";
            item.style.transform = "";
        });
    });
});
