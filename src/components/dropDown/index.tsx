import { color, size } from "@/constant/type";
import useClickOutSide from "@/Hooks/useClickMouseOutSide";
import { PropType } from "vue";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "dropDown",
  props: {
    title: {
      type: String,
      default: "标题",
      require: true
    },
    theme: {
      type: String as PropType<color>,
      default: "primary"
    },
    size: {
      type: String as PropType<size>,
      default: ""
    },
    light: {
      type: Boolean,
      default: false
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
    const isClickOutSide = useClickOutSide(dropdownRef);

    // 点击外部区域关闭dropdown
    watch(isClickOutSide, () => {
      if (isOpen.value && isClickOutSide.value) {
        isOpen.value = false;
      }
    });
    return () => (
      <div class="dropdown" ref={dropdownRef}>
        <div
          class={[
            "btn my-2 dropdown-toggle",
            `btn${props.light ? "-outline" : ""}-${props.theme} btn-${
              props.size
            }`
          ]}
          onClick={e => {
            toggleOpen();
          }}
        >
          {props.title}
        </div>
        {isOpen.value && (
          <ul class="dropdown-menu" style={{ display: "block" }}>
            {slots.default()}
          </ul>
        )}
      </div>
    );
  }
});
