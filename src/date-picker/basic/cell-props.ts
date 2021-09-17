export default {
  text: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
  },
  highlight: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  startOfRange: {
    type: Boolean,
  },
  endOfRange: {
    type: Boolean,
  },
  additional: {
    type: Boolean,
  },
  now: {
    type: Boolean,
  },
  firstDayOfMonth: {
    type: Boolean,
  },
  lastDayOfMonth: {
    type: Boolean,
  },
  onClick: Function,
  onMouseEnter: { type: Function },
};
