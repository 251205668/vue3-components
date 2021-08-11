import { defineComponent, PropType } from "vue";
import { color } from "@/constant/type";
export default defineComponent({
  name: "globalHeader",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    theme: {
      type: String as PropType<color>,
      default: "primary"
    }
  },
  setup() {},
  render() {
    const props = this.$props;
    return (
      <nav
        class={[
          "navbar navbar-dark justify-content-between mb-4 px-4",
          `bg-${props.theme}`
        ]}
      >
        <div class="w-75 mx-auto navbar">
          <a href="#" class="navbar-brand">
            {this.title}
          </a>
          <button class="btn btn-outline-light my-2 mb-0 mt-0">源码地址</button>
        </div>
      </nav>
    );
  }
});
