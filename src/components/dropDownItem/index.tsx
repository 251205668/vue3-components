import { defineComponent } from "vue";

export default defineComponent({
  name: "dropDownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    return () => (
      <li class={["dropdown-option", "disabled" && props.disabled]}>
        {slots.default()}
      </li>
    );
  }
});
