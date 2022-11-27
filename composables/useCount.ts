import { ref, onMounted, watch } from "vue";

export default function useCount() {
  const count = ref(0);

  const increment = (): void => {
    count.value++;
  };

  const showLog = (): void => {
    console.log(`count is ${count.value}.`);
  };

  onMounted(showLog);
  watch(count, showLog);

  return {
    count,
    increment,
  };
}
