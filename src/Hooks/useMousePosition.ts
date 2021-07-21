import { ref, onMounted, onUnmounted, reactive, toRefs } from "vue";

/*
 * @Descripttion:
 * @version:
 * @Author: yangzhihao
 * @Date: 2021-07-20 14:50:36
 * @LastEditors: yangzhihao
 * @LastEditTime: 2021-07-20 15:07:46
 */
export default function useMousePosition() {
  const position = reactive({
    x: 0,
    y: 0,
  });
  const updateMouse = (e: MouseEvent) => {
    position.x = e.pageX;
    position.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return position;
}
