import { PrimaryTableCol } from '../type';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import { h, SetupContext, VNodeChild } from 'vue';

export function toString<T>(obj: T): string {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
}

export function filterDataByIds<T>(
  data: Array<T> = [],
  ids: Array<string | number> = [],
  byId = 'id',
): Array<T> {
  return data.filter((d: Record<string, any> = {}) => ids.includes(d[byId]));
}

export const INNER_PRE_NAME = '@@inner-';

export enum ScrollDirection {
  X = 'x',
  Y = 'y',
  UNKNOWN = 'unknown',
}

let preScrollLeft: any;
let preScrollTop: any;

export const getScrollDirection = (
  scrollLeft: number,
  scrollTop: number,
): ScrollDirection => {
  let direction = ScrollDirection.UNKNOWN;
  if (preScrollTop !== scrollTop) {
    direction = ScrollDirection.Y;
  } else if (preScrollLeft !== scrollLeft) {
    direction = ScrollDirection.X;
  }
  preScrollTop = scrollTop;
  preScrollLeft = scrollLeft;
  return direction;
};

// 该方法主要用于排序、过滤等需要调整表头的功能，不支持 render 函数
export function getTitle(ctx: SetupContext, column: PrimaryTableCol, colIndex: number): VNodeChild | number {
  let result = null;
  if (isFunction(column.title)) {
    result = column.title(h, { col: column, colIndex });
  } else if (ctx.slots[column.colKey]) {
    result = ctx.slots[column.colKey](null);
  } else if (isString(column.title)) {
    result = ctx.slots[column.title]
      ? ctx.slots[column.title](null)
      : column.title;
  }
  return result;
}
