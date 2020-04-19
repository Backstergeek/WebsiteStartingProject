export class Component {
    hostElement: HTMLDivElement;
    form: HTMLFormElement;
    input: HTMLInputElement;

    
    constructor() {
        this.hostElement = document.getElementById("app")! as HTMLDivElement;
        this.form = document.createElement("form") as HTMLFormElement;
        this.input = document.createElement("input") as HTMLInputElement;
        this.input.type = "text"
        this.input.id = "inputText"
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin",this.form);
        this.form.insertAdjacentElement("afterbegin",this.input);
    }
}
