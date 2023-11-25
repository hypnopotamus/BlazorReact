import * as React from 'react';
import ReactDOM from 'react-dom';

const Component = () => <p>Hello from React!</p>;

class WebComponent extends HTMLElement {
    connectedCallback() {
        const root = this.attachShadow({ mode: 'open' });
        const mountPoint = document.createElement('div');
        root.appendChild(mountPoint);
        hello(mountPoint);
    }
}

export default function hello(renderElement: HTMLElement) {
    ReactDOM.render(<Component />, renderElement);
}

(window as any).renderReact = hello;
window.customElements.define("react-hello", WebComponent);