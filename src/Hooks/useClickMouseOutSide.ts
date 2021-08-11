import { onMounted, onUnmounted, ref, Ref } from "vue";

const useClickOutSilde = (elementRef: Ref<null | HTMLElement>) => {
  const isCLickOutSide = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      // 鼠标点击区域包含目标元素
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isCLickOutSide.value = false;
      } else {
        isCLickOutSide.value = true;
      }
    }
    onMounted(() => {
      document.addEventListener("click", handler);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handler);
    });
  };
  return isCLickOutSide;
};
export default useClickOutSilde;
