// NAVIGATION BAR
const people_link = document.getElementById("people-link");
const people_dropdown_content = document.getElementById("people-dropdown-content");
let people_dropdown_opened = false;

people_link.addEventListener('click', () => {
    if (!people_dropdown_opened) {
        people_dropdown_content.style.display = "block";
        people_dropdown_opened = true;
    } else {
        people_dropdown_content.style.display = "none";
        people_dropdown_opened = false;
    }
});