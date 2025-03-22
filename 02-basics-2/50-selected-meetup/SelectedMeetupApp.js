<<<<<<< HEAD
=======
import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'
>>>>>>> a6556b1835fd1f57f494813ba20740b97dc6b051

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

<<<<<<< HEAD

  template: `
    <div>
    <div>
      <button @click="prev" :disabled="selectedId === 1">Предыдущий</button>
      <label v-for="id in 5" :key="id">
        <input type="radio" :value="id" v-model="selectedId" /> {{ id }}
      </label>
      <button @click="next" :disabled="selectedId === 5">Следующий</button>
=======
  setup() {
    const MIN_ID = 1
    const MAX_ID = 5
    const ids = Array.from({ length: MAX_ID }, (_, i) => i + MIN_ID)
    const meetupId = ref(1)
    const meetup = ref(null)

    watch(
      meetupId,
      async () => {
        meetup.value = await getMeetup(meetupId.value)
      },
      { immediate: true },
    )

    return {
      ids,
      MIN_ID,
      MAX_ID,
      meetupId,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="meetupId <= MIN_ID" @click="meetupId -= 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="i in ids" class="radio-group__button">
            <input
              :id="\`meetup-id-\${i}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="i"
              v-model="meetupId"
            />
            <label :for="\`meetup-id-\${i}\`" class="radio-group__label">
              {{ i }}
            </label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="meetupId >= MAX_ID" @click="meetupId += 1">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div v-if="meetup" class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>

>>>>>>> a6556b1835fd1f57f494813ba20740b97dc6b051
    </div>
    <h1>{{ meetupTitle }}</h1>
  </div>
  `,
});
