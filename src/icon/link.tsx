import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-link`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
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
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M708.3945497599999 500.90654976L663.14654976 455.65854976 813.5362559999999 305.21606783999994 677.7717542399998 169.45156479999991 527.4025497599998 319.9145497600001 482.0905497599998 274.6025472000001 621.5460511999999 135.16760319999992C654.8707910399999 101.84286079999993 702.1471091199999 95.08910079999998 727.1406643199998 120.08265599999993L862.9051660799998 255.84715519999997C887.8987206399999 280.84071296 881.1449606399999 328.1170310399999 847.8202214399998 361.4417708799999L708.3945497599999 500.90654976ZM468.85733375999996 554.78731456L423.60249983999995 509.53248064 604.6218361599999 328.5131443199999 649.8766700799999 373.76797823999993 468.85733375999996 554.78731456ZM319.8471552 798.9051660800001L184.08265599999993 663.14066432C159.08910079999998 638.1471091200001 165.84286079999993 590.8707910400001 199.16760319999992 557.5460512000001L346.3465471999998 410.3465497600001 391.65854719999993 455.65854976 233.45156479999991 613.7717542400001 369.2160703999999 749.5362560000001 527.4025497599999 591.40254976 572.6505497599999 636.6505497600001 425.4417708799999 783.8202214400001C392.1170304 817.14496064 344.8407103999999 823.8987206400001 319.8471552 798.9051660800001Z"/></svg>;
  },

});
