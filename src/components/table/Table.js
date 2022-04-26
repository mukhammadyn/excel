import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'table-excel'

  toHTML() {
    return createTable()
  }
}
