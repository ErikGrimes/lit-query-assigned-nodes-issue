import { html, css, LitElement, property, queryAssignedNodes } from 'lit-element';

export class AssignedNodes extends LitElement {
  static styles =css`
    :host {
      display: block;
      padding: 25px;
      color: var(--assigned-nodes-text-color, #000);
    }
  `;

  @property({type: String}) title = 'slotted: ';

  @property({type: Number}) counter = 5;

  @queryAssignedNodes('',true,'#slotted')
  private slotted:any;

  __goBoom() {
    this.counter = this.slotted.length;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <div>
            <slot></slot>
      </div>
      <button @click=${this.__goBoom}>boom</button>
    `;
  }
}
