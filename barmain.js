// function to handle bottom navigation bar's click motion
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))

//Javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".list");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});