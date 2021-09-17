export default {
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: 'date',
    validator: (v: string) => ['year', 'month', 'date'].indexOf(v) > -1,
  },
  onBtnClick: Function,
  onTypeChange: Function,
};
