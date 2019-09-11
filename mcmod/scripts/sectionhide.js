/**
 * JavaScript code for hiding sections on long blocks of text.
 * @author up889658 (Redacted for coursework purposes)
 */

const headings = document.querySelectorAll("section h2");

headings.forEach(function (heading) {
    let sectionContent = document.querySelectorAll("#" + heading.id + " ~ *");

    sectionContent.forEach(function (child) {
        if (child !== heading) {
            child.setAttribute("style", "display: none;");
            heading.className = "expand";
        }
    });

    heading.addEventListener("click", () => {
        sectionContent.forEach(function (child) {
            if (child.getAttribute("style") === "display: auto;") {
                child.setAttribute("style", "display: none;");
                heading.className = "expand";
            } else {
                child.setAttribute("style", "display: auto;");
                heading.className = "close";
            }
        });
    });
});