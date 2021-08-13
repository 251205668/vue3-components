import { onMounted, onUnmounted, ref, Ref } from "vue";

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isOutSide = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isOutSide.value = false;
      } else {
        isOutSide.value = true;
      }
    }
  };
  onMounted(() => {
    document.body.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.body.removeEventListener("click", handler);
  });
  return isOutSide;
};
export default useClickOutSide;
