import { ref, watch, defineComponent } from 'vue';
import { getMeetup } from './meetupsService'; // Импортируем функцию getMeetup

export default defineComponent({
  setup() {
    const selectedId = ref(1); // Изначально выбран митап с ID = 1
    const meetupTitle = ref('');

    // Загружаем данные при изменении selectedId и сразу при создании компонента
    watch(
      selectedId,
      async (id) => {
        const data = await getMeetup(id);
        meetupTitle.value = data.title;
      },
      { immediate: true }
    );

    // Функции для переключения между митапами
    const prev = () => selectedId.value > 1 && selectedId.value--;
    const next = () => selectedId.value < 5 && selectedId.value++;

    return { selectedId, meetupTitle, prev, next };
  },


  template: `
    <div>
    <div>
      <button @click="prev" :disabled="selectedId === 1">Предыдущий</button>
      <label v-for="id in 5" :key="id">
        <input type="radio" :value="id" v-model="selectedId" /> {{ id }}
      </label>
      <button @click="next" :disabled="selectedId === 5">Следующий</button>
    </div>
    <h1>{{ meetupTitle }}</h1>
  </div>
  `,
});
