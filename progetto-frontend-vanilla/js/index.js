import "../css/index.css"
import "../img/sun.png"
import "../CHANGELOG.md"

function onClickAlert() {
    alert(`${new Date()}`);
}

window.onClickAlert = onClickAlert;
