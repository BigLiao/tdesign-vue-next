import { defineComponent } from 'vue';
import { prefix } from '../config';
import RenderComponent from '../utils/render-component';
import responsiveObserver from '../utils/responsive-observer';
import props from '@TdTypes/row/props';

const name = `${prefix}-row`;

export default defineComponent({
  name,

  components: {
    RenderComponent,
  },

  provide(): { rowContext: any } {
    return {
      rowContext: {
        getGutter: this.getGutter,
      },
    };
  },

  props: { ...props },

  data() {
    return {
      screenSize: '',
      respHanlerToken: -1,
    };
  },

  computed: {
    classes(): ClassName {
      const { justify, align } = this;
      return [
        name,
        {
          [`${name}-${justify}`]: justify,
          [`${name}-${align}`]: align,
        },
      ];
    },
    styles() {
      const gutter = this.getGutter();
      const margin: any = {};
      if (gutter[0] > 0) {
        margin.marginLeft = `${gutter[0] / -2}px`;
        margin.marginRight = `${gutter[0] / -2}px`;
      }
      if (gutter[1] > 0) {
        margin.marginTop = `${gutter[1] / -2}px`;
        margin.marginBottom = `${gutter[1] / -2}px`;
      }
      return margin;
    },
  },

  watch: {},

  // created() {
  //   this.$provide.rowContext.getGutter = this.getGutter;
  // },

  mounted() {
    this.respHanlerToken = responsiveObserver.subscribe((screenSize: string) => {
      this.screenSize = screenSize;
    });
  },

  beforeUnmount() {
    responsiveObserver.unsubscribe(this.respHanlerToken);
  },

  methods: {
    renderContent() {
      return this.$slots.default ? this.$slots.default(null) : '';
    },

    getGutter() {
      const results = [0, 0];
      const { gutter, screenSize } = this;
      const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
      normalizedGutter.forEach((g, index) => {
        if (typeof g === 'object') {
          if (g[screenSize] !== undefined) {
            results[index] = g[screenSize];
          }
        } else {
          results[index] = g || 0;
        }
      });
      return results;
    },
  },

  render() {
    // eslint-disable-next-line no-unused-vars
    const component =  this.tag;
    return (
      <component class={this.classes} style={this.styles}>
        {this.renderContent()}
      </component>
    );
  },
});
