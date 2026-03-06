import { Plugin, DefineComponent, CSSProperties } from 'vue';

// Localized label interface
export interface LocalizedLabel {
  footerLeft?: (top: number, bottom: number, total: number) => string;
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
  footerRight?: {
    selected?: string;
    filtered?: string;
    loaded?: string;
  };
  processing?: string;
  tableSetting?: string;
  exportExcel?: string;
  importExcel?: string;
  back?: string;
  reset?: string;
  sortingAndFiltering?: string;
  sortAscending?: string;
  sortDescending?: string;
  near?: string;
  exactMatch?: string;
  notMatch?: string;
  greaterThan?: string;
  greaterThanOrEqualTo?: string;
  lessThan?: string;
  lessThanOrEqualTo?: string;
  regularExpression?: string;
  customFilter?: string;
  listFirstNValuesOnly?: (n: number) => string;
  apply?: string;
  noRecordIsRead?: string;
  readonlyColumnDetected?: string;
  columnHasValidationError?: (name: string, err: string) => string;
  rowHasValidationError?: (row: number, name: string, err: string) => string;
  noMatchedColumnName?: string;
  invalidInputValue?: string;
  missingKeyColumn?: string;
  noRecordIndicator?: string;
}

// VueExcelEditor component props
export interface VueExcelEditorProps {
  modelValue?: any[];
  disablePanelSetting?: boolean;
  disablePanelFilter?: boolean;
  rowStyle?: (record: any, pos: number) => CSSProperties;
  cellStyle?: (record: any, field: string, pos: number) => CSSProperties;
  headerLabel?: (label: string) => string;
  recordLabel?: (pos: number) => number | string;
  noFinding?: boolean;
  noFindingNext?: boolean;
  noSorting?: boolean;
  noMassUpdate?: boolean;
  filterRow?: boolean;
  freeSelect?: boolean;
  noFooter?: boolean;
  noPaging?: boolean;
  noNumCol?: boolean;
  noMouseScroll?: boolean;
  page?: number;
  enterToSouth?: boolean;
  nFilterCount?: number;
  height?: string;
  width?: string;
  wheelSensitivity?: number;
  autocomplete?: boolean;
  autocompleteCount?: number;
  readonly?: boolean;
  readonlyStyle?: CSSProperties;
  remember?: boolean;
  register?: (api: any) => void;
  allowAddCol?: boolean;
  noHeaderEdit?: boolean;
  addColumn?: (field: string) => void;
  spellcheck?: boolean;
  newIfBottom?: boolean;
  validate?: (record: any) => string | null;
  localizedLabel?: LocalizedLabel;
  recordFilter?: (record: any) => boolean;
}

// VueExcelColumn component props
export interface VueExcelColumnProps {
  field?: string;
  label?: string | null;
  type?: string;
  initStyle?: CSSProperties | ((record: any) => CSSProperties) | null;
  width?: string;
  invisible?: boolean;
  readonly?: boolean | null;
  textTransform?: string | null;
  textAlign?: string | null;
  keyField?: boolean;
  sticky?: boolean;
  listByClick?: boolean | null;
  validate?: ((value: any, record: any) => string | null) | null;
  change?: ((value: any, record: any, oldValue: any) => void) | null;
  link?: ((value: any, record: any) => string) | null;
  isLink?: ((value: any, record: any) => boolean) | null;
  format?: string;
  cellClick?: ((record: any, field: string) => void) | null;
  autoFillWidth?: boolean;
  hideDuplicate?: boolean;
  grouping?: string | null;
  allowKeys?: string[] | ((key: string) => boolean) | null;
  mandatory?: string;
  lengthLimit?: number;
  autocomplete?: boolean | null;
  pos?: number;
  options?: any[] | Record<string, any> | ((value: any) => any[] | Record<string, any>) | null;
  summary?: string | null;
  sort?: ((a: any, b: any) => number) | null;
  sorting?: ((field: string, dir: number) => void) | null;
  noSorting?: boolean | null;
  masking?: string;
  placeholder?: string;
  color?: string | ((value: any, record: any) => string) | null;
  bgcolor?: string | ((value: any, record: any) => string) | null;
  toValue?: (text: string) => any;
  toText?: (value: any) => string;
}

// Export individual components with their props
export const VueExcelEditor: DefineComponent<VueExcelEditorProps>;
export const VueExcelColumn: DefineComponent<VueExcelColumnProps>;

// Plugin export
declare const plugin: Plugin;
export default plugin;