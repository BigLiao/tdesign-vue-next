import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-search`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M6.39594862,1.25 C9.23797757,1.25 11.5418972,3.59126127 11.5418972,6.47935341 C11.5418972,7.46129636 11.2755687,8.38002675 10.8123132,9.16501808 L14.75,13.1652666 L13.1905421,14.75 L9.30032459,10.796794 C8.47372132,11.3721334 7.47351354,11.7087068 6.39594862,11.7087068 C3.55391968,11.7087068 1.25,9.36744554 1.25,6.47935341 C1.25,3.59126127 3.55391968,1.25 6.39594862,1.25 Z M6.39594862,3.49115146 C4.77193208,3.49115146 3.45540655,4.82901504 3.45540655,6.47935341 C3.45540655,8.12969177 4.77193208,9.46755535 6.39594862,9.46755535 C8.01996517,9.46755535 9.3364907,8.12969177 9.3364907,6.47935341 C9.3364907,4.82901504 8.01996517,3.49115146 6.39594862,3.49115146 Z"/></svg>;
  },

});
