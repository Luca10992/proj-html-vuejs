<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: { card: Object },

  methods: {
    buildPathImg(imageName) {
      return new URL(
        "../assets/construction/images/" + imageName,
        import.meta.url
      ).href;
    },
  },
};
</script>
<template>
  <div>
    <img :src="buildPathImg(card.imageName)" alt="img" />
  </div>
  <div class="text-box">
    <h4>{{ card.titleCard }}</h4>
    <h6>{{ card.date }}</h6>
    <div class="doubleLine"></div>
    <p>{{ card.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}

.text-box {
  padding: 1rem;

  .doubleLine {
    width: 80%;
    margin: 1rem auto;
  }

  h6 {
    font-weight: 200;
    font-size: 10px;
  }

  h4 {
    font-weight: 300;
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }
}
</style>
