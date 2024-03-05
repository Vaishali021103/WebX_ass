"use strict";
function printpdf() {
    var content = document.getElementById("resume");
    if (!content) {
        console.error("Resume content element not found!");
        return;
    }
    var allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(function (button) {
        button.classList.add("none");
    });
    var allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(function (input) {
        input.classList.add("none");
    });
    allButtons.forEach(function (button) {
        button.classList.remove("none");
    });
    allInputCheckboxes.forEach(function (input) {
        input.classList.remove("none");
    });
    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
}
function remedu(event) {
    var val = 0;
    var empty = true;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
function addskill() {
    var head = document.createElement('div');
    var skillsSection = document.getElementById("skills");
    if (!skillsSection) {
        console.error("Skills section not found!");
        return;
    }
    skillsSection.appendChild(head);
    head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">write your skill here</span></div>');
    saveresume();
}
function remskill(event) {
    var val = 0;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
function addLang() {
    var head = document.createElement('div');
    var languagesSection = document.getElementById("languages");
    if (!languagesSection) {
        console.error("Languages section not found!");
        return;
    }
    languagesSection.appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span></div>');
    saveresume();
}
function remLang(event) {
    var val = 0;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
function addAch() {
    var head = document.createElement('div');
    var achievementSection = document.getElementById("achievement");
    if (!achievementSection) {
        console.error("Achievement section not found!");
        return;
    }
    achievementSection.appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
    saveresume();
}
function remAch(event) {
    var val = 0;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
function addInt() {
    var head = document.createElement('div');
    var interestSection = document.getElementById("interest");
    if (!interestSection) {
        console.error("Interest section not found!");
        return;
    }
    interestSection.appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
    saveresume();
}
function remInt(event) {
    var val = 0;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
var maxNewSection = 1;
function addsec() {
    if (maxNewSection < 2) {
        var head = document.createElement('div');
        var newSection = document.getElementById("newsec");
        if (!newSection) {
            console.error("New Section element not found!");
            return;
        }
        newSection.appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        maxNewSection++;
    }
    else {
        alert("At most 2 NEW SECTION can be added!");
    }
    saveresume();
}
function remsec(event) {
    var val = 0;
    var allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    for (var i = 0; i < allInputCheckboxes.length; i++) {
        var element = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            maxNewSection--;
            element.parentElement.parentElement.remove();
        }
    }
    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }
    saveresume();
}
function saveresume() {
    var sec = document.getElementById("print");
    if (!sec) {
        console.error("Print section not found!");
        return;
    }
    var value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    if (!info) {
        console.error("Custom info element not found!");
        return;
    }
    info.value = value1;
}
