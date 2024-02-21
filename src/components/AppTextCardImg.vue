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
  <div class="img-box">
    <img :src="buildPathImg(card.imageName)" alt="img" />
    <div class="hover justify-content-center align-items-center">
      <div
        class="text-hover d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div class="d-flex gap-1">
          <div class="iconHover-box">
            <font-awesome-icon icon="fa-solid fa-paperclip" />
          </div>
          <div class="iconHover-box">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div>
          <p>{{ card.titleCard }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="text-box">
    <h4>{{ card.titleCard }}</h4>
    <h6>{{ card.date }}</h6>
    <div class="doubleLine"></div>
    <p>{{ card.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.section_7 {
  .img-box {
    width: 100%;
    height: 100%;
  }
  .card:hover img {
    display: none;
  }
  .card:hover .hover {
    display: flex;
  }
  .hover {
    display: none;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
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

    .text-hover {
      font-size: 15px;
    }
  }

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
}
</style>
