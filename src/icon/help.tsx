import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-help`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1.5 C11.5898509,1.5 14.5,4.41014913 14.5,8 C14.5,11.5898509 11.5898509,14.5 8,14.5 C4.41014913,14.5 1.5,11.5898509 1.5,8 C1.5,4.41014913 4.41014913,1.5 8,1.5 Z M8,2.5 C4.96243388,2.5 2.5,4.96243388 2.5,8 C2.5,11.0375661 4.96243388,13.5 8,13.5 C11.0375661,13.5 13.5,11.0375661 13.5,8 C13.5,4.96243388 11.0375661,2.5 8,2.5 Z M8.5,11.5 L8.5,12.5 L7.5,12.5 L7.5,11.5 L8.5,11.5 Z M8.0046132,4.01009539 C9.350661,4.03211322 10.4851145,5.01121866 10.5052549,6.49301417 C10.5174484,7.39012892 10.2490648,7.90582915 9.55488287,8.63458025 L9.35782416,8.83629966 C8.75031018,9.44897977 8.53343338,9.78389814 8.50366247,10.3603266 L8.5,10.5097596 L7.5,10.5097596 C7.5,9.57548727 7.77943441,9.04055692 8.48903385,8.29532631 L8.68944575,8.09013171 C9.32708164,7.44703811 9.51383091,7.13077242 9.50534729,6.50660482 C9.4930405,5.60115445 8.82388448,5.02363031 7.988258,5.00996164 C7.32795266,4.99916077 6.73090084,5.42254299 6.55099163,6.06078805 C6.53077967,6.13249189 6.51532705,6.26281579 6.50886399,6.38407655 L6.50555412,6.49980949 L5.50555412,6.49980949 C5.50555412,6.27231503 5.53152831,5.99158916 5.58849917,5.78947962 C5.89419062,4.7050101 6.89964484,3.992021 8.0046132,4.01009539 Z"/></svg>;
  },

});
