import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'header-excel'

  toHTML() {
    return `
      <input class="header-excel__input-title" 
      type="text" value="Новая таблица" aria-label="Новая таблица">
      <div class="header-excel__buttons">
        <div class="button"><i class="material-icons">delete</i></div>
        <div class="button"><i class="material-icons">exit_to_app</i></div>
      </div>`
  }
}
