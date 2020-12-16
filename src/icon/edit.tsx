import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-edit`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M447.8469152 783.0581632C437.60592704 793.2991488 424.19421696 799.7638272 409.8035072 801.395744L256.6740096 818.760736C221.55288832 822.7435008 189.85292864 797.5008704 185.87016768 762.3797504 185.32672256 757.587488 185.32672256 752.7491584 185.87016768 747.956896L203.23516352 594.82739968C204.86708032 580.43668992 211.33175744 567.0249792 221.5727456 556.78399104L522.53948096 255.81725568 613.0491488 165.30758784C638.04270336 140.31403328 676.171072 137.9198432 698.2112448 159.96001472L844.6708928 306.41966272C866.7110656 328.45983488 864.3168704 366.58820352 839.3233216 391.58175808L447.8469152 783.0581632ZM522.48658368 346.28481664L266.82757952 602.0388256 249.46258368 755.16832 402.59208128 737.803328 658.2945856 482.09281664 522.48658368 346.28481664ZM658.3335872 211.32421888L568.18258368 301.42081664 714.6145856 447.85281664 804.7932352 357.78386688 658.3335872 211.32421888Z"/></svg>;
  },

});