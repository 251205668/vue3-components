import { defineComponent } from "vue";
import "./index.scss";

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
      <li class={["dropdown-option", props.disabled ? "disabled" : ""]}>
        {slots.default()}
      </li>
    );
  }
});
