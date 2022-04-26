import {ExcelComponent} from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'toolbar-excel'
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
    <button class="toolbar-excel__btn"><i class="material-icons">format_align_left</i></button>
    <button class="toolbar-excel__btn"><i class="material-icons">format_align_center</i></button>
    <button class="toolbar-excel__btn"><i class="material-icons">format_align_right</i></button>
    <button class="toolbar-excel__btn"><i class="material-icons">format_bold</i></button>
    <button class="toolbar-excel__btn"><i class="material-icons">format_italic</i></button>
    <button class="toolbar-excel__btn"><i class="material-icons">format_underline</i></button>`
  }

  onClick(event) {
    console.log(event.target)
  }
}
