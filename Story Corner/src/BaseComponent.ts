export class BaseComponent extends HTMLElement {
    private _isRenderScheduled: boolean = false;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.scheduleRender();
    }

    attributeChangedCallback() {
        this.scheduleRender();
    }

    setProperty(name: string, value: any) {
        const json = JSON.stringify(value);
        this.setAttribute(name, json);
    }

    getValueProperty(name: string): any {
        return this.getAttribute(name) ?? null;
    }

    getProperty(name: string): any {
        const json = this.getAttribute(name) ?? null;
        if (!json) return null;
        try {
            return JSON.parse(json);
        } catch {
            return null;
        }
    }

    dispatchCustomEvent<T>(eventName: string, detail: T): void {
        const obj = { detail, bubbles: true, composed: true };
        const event = new CustomEvent<T>(eventName, obj);
        this.shadowRoot!.dispatchEvent(event);
    }

    scheduleRender() {
        if (this._isRenderScheduled) return;
        this._isRenderScheduled = true;
        requestAnimationFrame(this.render.bind(this));
    }

    render() {
        this._isRenderScheduled = false;
    }
}