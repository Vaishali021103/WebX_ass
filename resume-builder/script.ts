// Ensure html2pdf library is properly imported or available in the global scope
declare function html2pdf(content: HTMLElement, options: any): void;

interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}

function printpdf(): void {
    const content: HTMLElement | null = document.getElementById("resume");

    if (!content) {
        console.error("Resume content element not found!");
        return;
    }

    const allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("#print button");
    allButtons.forEach((button: HTMLButtonElement) => {
        button.classList.add("none");
    });

    const allInputCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach((input: HTMLInputElement) => {
        input.classList.add("none");
    });

    allButtons.forEach((button: HTMLButtonElement) => {
        button.classList.remove("none");
    });

    allInputCheckboxes.forEach((input: HTMLInputElement) => {
        input.classList.remove("none");
    });

    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
}

function remedu(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    let empty: boolean = true;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

function addskill(): void {
    const head: HTMLDivElement = document.createElement('div');
    const skillsSection: HTMLElement | null = document.getElementById("skills");

    if (!skillsSection) {
        console.error("Skills section not found!");
        return;
    }

    skillsSection.appendChild(head);
    head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">write your skill here</span></div>');
    saveresume();
}

function remskill(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

function addLang(): void {
    const head: HTMLDivElement = document.createElement('div');
    const languagesSection: HTMLElement | null = document.getElementById("languages");

    if (!languagesSection) {
        console.error("Languages section not found!");
        return;
    }

    languagesSection.appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span></div>');
    saveresume();
}

function remLang(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

function addAch(): void {
    const head: HTMLDivElement = document.createElement('div');
    const achievementSection: HTMLElement | null = document.getElementById("achievement");

    if (!achievementSection) {
        console.error("Achievement section not found!");
        return;
    }

    achievementSection.appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
    saveresume();
}

function remAch(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

function addInt(): void {
    const head: HTMLDivElement = document.createElement('div');
    const interestSection: HTMLElement | null = document.getElementById("interest");

    if (!interestSection) {
        console.error("Interest section not found!");
        return;
    }

    interestSection.appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
    saveresume();
}

function remInt(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

let maxNewSection: number = 1;

function addsec(): void {
    if (maxNewSection < 2) {
        const head: HTMLDivElement = document.createElement('div');
        const newSection: HTMLElement | null = document.getElementById("newsec");

        if (!newSection) {
            console.error("New Section element not found!");
            return;
        }

        newSection.appendChild(head);

        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        } else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }

        maxNewSection++;
    } else {
        alert("At most 2 NEW SECTION can be added!");
    }

    saveresume();
}

function remsec(event: HTMLElementEvent<HTMLInputElement>): void {
    let val: number = 0;
    const allInputCheckboxes: HTMLCollectionOf<HTMLInputElement> = event.target.parentElement!.getElementsByClassName("input-checkbox") as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < allInputCheckboxes.length; i++) {
        const element: HTMLInputElement = allInputCheckboxes[i];
        if (element.checked === true) {
            val = 1;
            maxNewSection--;
            element.parentElement!.parentElement!.remove();
        }
    }

    if (val === 0) {
        alert("Please select the checkboxes to delete the required field!");
    }

    saveresume();
}

function saveresume(): void {
    const sec: HTMLElement | null = document.getElementById("print");

    if (!sec) {
        console.error("Print section not found!");
        return;
    }

    const value1: string = sec.innerHTML;
    const info: HTMLInputElement | null = document.getElementById("custinfo") as HTMLInputElement;

    if (!info) {
        console.error("Custom info element not found!");
        return;
    }

    info.value = value1;
}
