import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-browse`;

export default Vue.extend({
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512.31193344 191.68C673.576288 191.68 816.8700672 271.24435968 939.4341184 426.75416384 943.7017984 432.1690144 948.6290176 438.67497984 954.3059008 446.3892416L954.3059008 446.3892416 960.015488 454.20783232C984.3779968 487.81364992 984.3835072 533.27069888 960.029152 566.88242304 951.8335232 578.19329792 944.9217664 587.42448832 939.2504128 594.6245888L939.2504128 594.6245888 924.8572544 612.44831424C804.221344 758.115424 666.279104 832.1520256 512.31193344 832.1520256 352.1885216 832.1520256 206.96606976 750.5602432 84.03478784 594.35199616 82.56227264 592.48087744 81.02637504 590.496816 79.4232832 588.39479808L79.4232832 588.39479808 63.334170304 566.51087552C39.457316032 533.09919872 39.476966208 488.200304 63.383056832 454.80953984 65.41239232 451.97507072 67.36269568 449.27119872 69.2346784 446.69712448L69.2346784 446.69712448 83.98712832 427.01343232C205.91012928 270.98439104 349.24264256 191.68 512.31193344 191.68ZM512.31193344 255.68C370.27922816 255.68 244.8717344 325.06666368 134.41671872 466.4197312L134.41671872 466.4197312 130.4086144 471.63225728 115.42102528 492.06608128C107.45232 503.19634752 107.44577024 518.16266112 115.32851584 529.1937088L115.32851584 529.1937088 130.23968192 549.48861632 148.35458752 572.12487296C256.520496 702.3597696 379.16950464 768.1520256 512.31193344 768.1520256 651.2719424 768.1520256 776.3454976 698.0112 888.974016 555.02302208 894.0465984 548.58310336 900.4709888 540.00282816 908.2037248 529.33079104 916.3219648 518.12671488 916.320128 502.97413696 908.2649088 491.86237568L908.2649088 491.86237568 902.6904576 484.22880192 889.16912 466.37019712C778.03872 325.36745344 652.5330432 255.68 512.31193344 255.68ZM512.31193344 318.56218048C618.3506048 318.56218048 704.311936 404.52350848 704.311936 510.56218048 704.311936 616.60085248 618.3506048 702.5621824 512.31193344 702.5621824 406.27326144 702.5621824 320.31193344 616.60085248 320.31193344 510.56218048 320.31193344 404.52350848 406.27326144 318.56218048 512.31193344 318.56218048ZM512.31193344 382.56218048C441.61948544 382.56218048 384.31193344 439.86973248 384.31193344 510.56218048 384.31193344 581.25462848 441.61948544 638.56218048 512.31193344 638.56218048 583.0043808 638.56218048 640.311936 581.25462848 640.311936 510.56218048 640.311936 439.86973248 583.0043808 382.56218048 512.31193344 382.56218048Z"/></svg>;
  },

});
