/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

import { CountToPlugin } from './CountTo';
import { EnChartPlugin } from './EnChart';
import { AlarmInfoPlugin } from './AlarmInfo';
import { CascaderPlugin } from './Cascader';
import { SelectPlugin } from './Select';
import { TooltipPlugin } from './Tooltip';
import { TransferPlugin } from './Transfer';
import { DialogPlugin } from './Dialog';
import { PaginationPlugin } from './Pagination';
import { InputPlugin } from './Input';
import { DataPickerPlugin } from './DataPicker';
import { ButtonPlugin } from './Button';
import { CheckboxPlugin } from './Checkbox';
import { RadioPlugin } from './Radio';
import { SwitchPlugin } from './Switch';
import { UploadPlugin } from './Upload';
import { IconPlugin } from './Icon';

const DPlugin = {
  install(app) {
    CountToPlugin.install?.(app);
    EnChartPlugin.install?.(app);
    AlarmInfoPlugin.install?.(app);
    CascaderPlugin.install?.(app);
    SelectPlugin.install?.(app);
    TooltipPlugin.install?.(app);
    TransferPlugin.install?.(app);
    DialogPlugin.install?.(app);
    PaginationPlugin.install?.(app);
    InputPlugin.install?.(app);
    DataPickerPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
    RadioPlugin.install?.(app);
    SwitchPlugin.install?.(app);
    UploadPlugin.install?.(app);
    IconPlugin.install?.(app);
  },
};

export default DPlugin;

export * from './CountTo'
export * from './EnChart'
export * from './AlarmInfo'
export * from './Cascader'
export * from './Select'
export * from './Tooltip'
export * from './Transfer'
export * from './Dialog'
export * from './Pagination'
export * from './Input'
export * from './DataPicker'
export * from './Button'
export * from './Checkbox'
export * from './Radio'
export * from './Switch'
export * from './Upload'
export * from './Icon'