<!-- mobiel mooie layout -->
function fixHeight() {
    let viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.height = `${viewportHeight}px`;
    document.body.style.height = `${viewportHeight}px`;
}
window.addEventListener("resize", fixHeight);
window.addEventListener("orientationchange", fixHeight);
window.addEventListener("load", fixHeight);
