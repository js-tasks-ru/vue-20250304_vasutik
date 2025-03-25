// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'UiClock',

//   setup() {},

//   template: `<div class="clock">10:12:02</div>`,
// })

// import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

// export default defineComponent({
//   name: 'UiClock',

//   setup() {
//     const currentTime = ref('');

//     const updateTime = () => {
//       currentTime.value = new Date().toLocaleTimeString([], { timeStyle: 'medium' });
//     };

//     let intervalId;

//     onMounted(() => {
//       updateTime(); // Инициализируем время сразу
//       intervalId = setInterval(updateTime, 1000); // Обновляем каждую секунду
//     });

//     onUnmounted(() => {
//       clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
//     });

//     return {
//       currentTime,
//     };
//   },

//   template: `<div class="clock">{{ currentTime }}</div>`,
// });

import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref('');

    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
    };

    const updateTime = () => {
      currentTime.value = formatTime(new Date());
    };

    let intervalId;

    onMounted(() => {
      updateTime();
      intervalId = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { currentTime };
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
});
