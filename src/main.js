// index.js

import VueExcelEditor from './VueExcelEditor.vue'
import VueExcelColumn from './VueExcelColumn.vue'

export default {
  install (app) {

    app.component('vue-excel-editor', VueExcelEditor)
    app.component('vue-excel-column', VueExcelColumn)
  }
}

export { VueExcelEditor, VueExcelColumn }
