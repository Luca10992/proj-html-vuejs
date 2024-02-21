<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: { titlesSections: Array },
};
</script>
<template>
  <div class="text-center">
    <h3>{{ titlesSections }}</h3>
    <div class="line"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos natus
      pariatur, similique dolores velit, magnam voluptate deserunt, sint
      mollitia consectetur.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.text-center {
  color: #555;

  p {
    font-size: 12px;
    padding: 0 6rem;
  }
}
</style>
