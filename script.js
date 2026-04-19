const cols = document.querySelectorAll(".column");
const main = document.querySelector(".columns");

function closeAll() {
  cols.forEach((c) => c.classList.remove("open", "open-active"));
}

cols.forEach((col) => {
  col.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!col.classList.contains("open")) {
      closeAll();
      col.classList.add("open");
      requestAnimationFrame(() => col.classList.add("open-active"));
    } else {
      closeAll();
    }
  });

  col.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      col.click();
    }
  });
});

document.addEventListener("click", (e) => {
  if (!main.contains(e.target)) closeAll();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

new Image().src = [...cols].map((c) => getComputedStyle(c).backgroundImage.slice(5, -2)).join(",");
