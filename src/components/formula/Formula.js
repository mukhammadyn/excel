import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'formula-excel'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  toHTML() {
    return `
    <div class="formula-excel__info">fx</div>
    <div class="formula-excel__input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('Formula input', event.target.textContent);
  }
}
