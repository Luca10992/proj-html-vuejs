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
  <div class="hover justify-content-center align-items-center">
    <div>
      <div class="d-flex gap-1">
        <div class="iconHover-box">
          <font-awesome-icon icon="fa-solid fa-paperclip" />
        </div>
        <div class="iconHover-box">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

.section_4 {
  .img:hover img {
    display: none;
  }
  .img:hover .hover {
    display: flex;
  }
  .hover {
    display: none;
    width: 100%;
    height: 100%;
    background-color: #fed03d;

    .iconHover-box {
      width: 40px;
      aspect-ratio: 1;
      background-color: white;
      color: #fed03d;
      border-radius: 50%;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: #777;
        color: white;
      }
    }
  }
}

.section_8 {
  .hover {
    display: none;
  }
}
</style>
