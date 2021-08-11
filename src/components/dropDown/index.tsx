import useClickOutSilde from "@/Hooks/useClickMouseOutSide";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "dropDown",
  props: {
    title: {
      type: String,
      default: "下拉菜单标题"
    }
  },
  setup(props, { slots }) {
    // 是否打开
    const isOpen = ref(false);
    // 获取dom
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    // 是否点击外部区域
    const isClickOutSide = useClickOutSilde(dropdownRef);
    console.log(isClickOutSide.value);

    // 点击外部区域关闭dropdown
    watch(isClickOutSide, () => {
      if (isOpen.value && isClickOutSide.value) {
        isOpen.value = false;
      }
    });
    return () => (
      <div class="dropdown" ref="dropdownRef">
        <div
          class="btn btn-outline-primary my-2 dropdown-toggle"
          onClick={e => {
            toggleOpen();
          }}
        >
          {props.title}
        </div>
        {isOpen && (
          <ul class="dropdown-menu" style={{ display: "block" }}>
            {slots.default()}
          </ul>
        )}
      </div>
    );
  }
});
