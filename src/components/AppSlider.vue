<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

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
    <h3>Our HomeOwners Say</h3>
    <div class="line"></div>
  </div>
  <div class="slider">
    <div class="slide">
      <div>
        <img
          :src="buildPathImg(store.slides[store.currentSlide].testimonialImage)"
        />
      </div>
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero
        delectus minima suscipit voluptates, provident fugit obcaecati.
        Accusamus, ad exercitationem voluptas, modi quaerat quam amet expedita
        accusantium ea nesciunt minus."
      </p>
      <h5>{{ store.slides[store.currentSlide].testimonial }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;

  .slide {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      font-style: italic;
      padding: 0 8rem;
    }

    div {
      width: 150px;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
