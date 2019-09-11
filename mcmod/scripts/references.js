/**
 * Reference highlighting tool
 * @author up889658 (Redacted for coursework purposes)
 */

const anchors = document.querySelectorAll("cite a");
let current = null;

anchors.forEach(function (anchor) {
    anchor.addEventListener('click', () => {
        let reference = document.querySelector("#" + anchor.href.split('#')[1]);
        reference.setAttribute("style", "background: salmon; border: 1px solid blue;");

        if (current != null) {
            current.setAttribute("style", "");
        }

        current = reference;
    });
});