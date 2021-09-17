const DAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];

export default {
  type: {
    type: String,
    default: 'day',
  },
  data: Array,
  firstDayOfWeek: Number,
  /**
   * 星期的显示名字，规定从星期一开始，实际显示顺序会根据 firstDayOfWeek 进行计算
   */
  dayNames: { type: Array, default: () => DAY_NAMES },
  onCellClick: { type: Function },
  onCellMouseEnter: { type: Function },
};
