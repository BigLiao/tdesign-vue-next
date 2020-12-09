import { mount } from '@vue/test-utils';
import TIconLoading from '@/src/icon/loading.tsx';
import TIconClose from '@/src/icon/close.tsx';
import TIconCheckCircleFilled from '@/src/icon/check-circle-filled.tsx';

// every component needs four parts: props/events/slots/functions.
describe('Iconfont', () => {
  // test props api
  describe(':props', () => {
    it(':size', () => {
      const wrapper = mount({
        components: { TIconLoading, TIconClose, TIconCheckCircleFilled },
        render() {
          return (
            <div>
              <t-icon-loading />
              <t-icon-close />
              <t-icon-check-circle-filled />

              <t-icon-check-circle-filled size="xs" />
              <t-icon-check-circle-filled size="small" />
              <t-icon-check-circle-filled />
              <t-icon-check-circle-filled size="middle" />
              <t-icon-check-circle-filled size="large" />
              <t-icon-check-circle-filled size="xl" />
              <t-icon-check-circle-filled size="25px" />
              <t-icon-check-circle-filled size="2em" />

              <t-icon-check-circle-filled style="color: red" />
              <t-icon-check-circle-filled style="color: green" />
              <t-icon-check-circle-filled style="color: orange" />
            </div>
          );
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
