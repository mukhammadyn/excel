const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `<div class="table-excel__cell" contenteditable></div>`
}

function toColumn(content) {
  return `
    <div class="table-excel__column">
      ${content}
    </div>
  `
}

function createRow(content, info = '') {
  return `
    <div class="table-excel__row">
      <div class="table-excel__row-info">${info}</div>
      <div class="table-excel__row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(cols))

  for (let i = 1; i <= rowCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    console.log(cells);
    rows.push(createRow(cells, i))
  }

  return rows.join('')
}
