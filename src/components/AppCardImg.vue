<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: { image: String },

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
  <img :src="buildPathImg(image)" alt="img" />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
