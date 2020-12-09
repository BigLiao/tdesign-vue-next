import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-call`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M314.13814976 127.90664832C275.81023616 127.277904 234.5088704 138.08312128 201.49404608 160.99936512L190.81145984 169.08759808C168.70275584 184.18336128 152.528672 205.95024192 142.86419008 231.79660608 136.14797504 249.75822656 134.20092224 261.00060416 130.87586496 289.99293824 119.21441344 414.6870912 177.4154112 550.95171136 297.112816 685.5017152 377.24172416 775.3827968 477.466992 842.6868736 579.92832256 875.0944768 623.25680704 888.7711488 664.8818496 895.8916224 702.555712 895.8916224 747.7294144 895.8916224 786.8595328 885.691008 816.2524544 865.1736896 842.9868992 845.708352 865.1947456 808.716032 886.1846656 753.105344 896.4778752 725.8345024 887.0431616 695.053504 863.2368 678.2339456L712.3614656 571.65356224C687.4661952 554.06720576 653.6228544 556.47965568 631.47106688 577.415616L617.29874688 591.28525248 601.03074688 608.06851072C597.48518336 612.26085632 589.01318272 618.63594048 588.93701504 618.64078336 569.306704 620.09977344 528.91922176 599.16592576 466.55025856 538.2179072L449.53806592 520.0814272C397.70344192 463.87785344 393.54580416 448.74759936 405.56930752 431.48240064L410.26915136 425.73013056C414.9161056 419.62130496 426.04435456 403.63333376 449.48916224 369.53265024 462.93771648 349.97160704 464.45468736 324.57373696 453.43013504 303.55095744L445.2230784 288.03667264C388.40504 181.60535936 354.2077824 132.9830656 319.133104 128.28074496L314.13814976 127.90664832ZM313.11263296 191.89774784C307.85203712 191.81611392 315.95486208 199.21515008 327.07944064 214.62207808 343.30409664 237.0923328 363.93942144 271.67431168 388.707984 318.07047872L396.75090304 333.2741888 361.9452128 383.70725248C361.18291328 384.88058176 360.87968192 385.41970112 361.12398976 385.20674816 317.92789376 440.20546688 330.04223872 487.57426496 421.00338048 583.16377152 496.0368256 656.5172608 552.06799744 685.5596224 593.34247552 682.4880448 615.92754752 681.053824 636.60989184 665.490592 648.9880768 650.3843904 655.1678208 643.9586816 661.3816576 637.632224 667.1586112 631.93376448L675.4352064 623.92641984 826.30784 730.5052032C809.3620864 775.4012928 792.696608 803.1615104 779.095712 813.0683968 762.0063552 824.9894784 735.5293504 831.8916224 702.555712 831.8916224 671.8091008 831.8916224 636.5887776 825.866752 599.2107936 814.0683712 508.11845248 785.2566656 417.58526016 724.461088 344.90742784 642.937952 236.0252576 520.54516032 184.80720896 400.629552 194.52860928 296.61689408L196.58529728 280.13727104C198.20375168 268.7427264 199.7822176 262.3105152 202.8105088 254.21175424 208.05497344 240.18613504 216.27713984 229.12084672 229.34400192 220.11296896 250.22759104 203.01123072 276.952096 193.87901824 302.32033216 192.17508288L313.11263296 191.89774784Z"/></svg>;
  },

});
