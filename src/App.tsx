import { defineComponent, reactive, toRefs } from "vue";
import useMousePosition from "@/Hooks/useMousePosition";
import "@styles/app.css";
import classes from "@styles/test.module.css";

export default defineComponent({
  setup() {
    const state = reactive({
      count: 1
    });

    const { x, y } = {
      ...toRefs(useMousePosition())
    };

    return () => {
      const mode = import.meta.env.MODE; // 模式
      const baseUrl = import.meta.env.BASE_URL; //基本URL
      const prod = import.meta.env.PROD;
      const dev = import.meta.env.DEV;
      const token = import.meta.env.VITE_SOME_KEY;

      return (
        <div class="root">
          {" "}
          <p>Hello Vue3 JSX</p> <span> {state.count}</span>{" "}
          <p class={classes.moduleClass}> {x.value}</p> <p> {y.value}</p>{" "}
          <p>当前模式： {mode}</p> <p>当前baseURL： {baseUrl}</p>{" "}
          <p>当前是否是生产环境： {prod}</p> <p>当前是否是开发环境： {dev}</p>{" "}
          <span>当前环境下token： {token}</span>{" "}
        </div>
      );
    };
  }
});
