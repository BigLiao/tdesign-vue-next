import { mount } from '@vue/test-utils';
import TIconLoading from '@/src/icon/loading.tsx';
import TIconClose from '@/src/icon/close.tsx';
import TIconSuccessFill from '@/src/icon/success_fill.tsx';

// every component needs four parts: props/events/slots/functions.
describe('Iconfont', () => {
  // test props api
  describe(':props', () => {
    it(':size', () => {
      const wrapper = mount({
        components: { TIconLoading, TIconClose, TIconSuccessFill },
        render() {
          return (
            <div>
              <t-icon-loading />
              <t-icon-close />
              <t-icon-success-fill />

              <t-icon-success-fill size="xs"/>
              <t-icon-success-fill size="small"/>
              <t-icon-success-fill />
              <t-icon-success-fill size="middle"/>
              <t-icon-success-fill size="large"/>
              <t-icon-success-fill size="xl"/>
              <t-icon-success-fill size="25px"/>
              <t-icon-success-fill size="2em"/>

              <t-icon-success-fill style="color: red"/>
              <t-icon-success-fill style="color: green"/>
             <t-icon-success-fill style="color: orange"/>
            </div>
          );
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
