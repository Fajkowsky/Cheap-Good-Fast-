import { shallowMount } from '@vue/test-utils';
import ElementItem from '@/components/ElementItem.vue';

describe('Element item', () => {
  it('when rendered then show value', () => {
    const foo = 'foo';
    const wrapper = shallowMount(ElementItem, {
      propsData: {
        value: foo,
        state: false,
      },
    });

    expect(wrapper.html()).toContain(foo);
  });
});
