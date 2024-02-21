<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: { titlesSections: String },
};
</script>
<template>
  <div class="title-section">
    <h3>{{ titlesSections }}</h3>
    <div class="line"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos natus
      pariatur, similique dolores velit, magnam voluptate deserunt..
    </p>
  </div>
</template>

<style lang="scss" scoped>
.title-section {
  text-align: center;
  color: #555;

  p {
    font-size: 12px;
    padding: 0 6rem;
  }
}

.section_9 {
  .title-section {
    text-align: start;
    color: white;
    padding: 3rem 0;
    width: 65%;

    h3 {
      margin: 0;
    }

    .line {
      margin: 2rem 0;
    }

    p {
      padding: 0;
      font-size: 15px;
    }
  }
}
</style>
