const INDENT_SCALE = 30;

const tableOfContentsGenerator = () => {
  const tableOfContentsAnchor = document.querySelector(
    ".table-of-contents__list ul"
  );
  const elements = document.querySelectorAll(".entity");
  elements.forEach(element => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `#${element.id}`);
    link.innerText = element.querySelector("h2").textContent.trim();
    li.appendChild(link);
    li.style.paddingLeft = extractEntityLevel(element) * INDENT_SCALE + "px";
    tableOfContentsAnchor.appendChild(li);
  });
};

const extractEntityLevel = element => {
  const headerContent = element.querySelector("header");
  const headerElementClass = headerContent.className;
  return headerElementClass.match(/\d/)[0] - 1;
};

tableOfContentsGenerator();
