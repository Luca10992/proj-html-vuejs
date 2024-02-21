<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppCardImg from "./AppCardImg.vue";
import AppSlider from "./AppSlider.vue";
import AppTextCardImg from "./AppTextCardImg.vue";
import AppTitleSection from "./AppTitleSection.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    nextSlide() {
      if (store.currentSlide < store.slides.length - 1) {
        store.currentSlide++;
      } else {
        store.currentSlide = 0;
      }
    },

    prevSlide() {
      if (store.currentSlide > 0) {
        store.currentSlide--;
      } else {
        store.currentSlide = store.slides.length - 1;
      }
    },
  },

  components: {
    AppCard,
    AppCardImg,
    AppSlider,
    AppTextCardImg,
    AppTitleSection,
  },
};
</script>

<template>
  <main>
    <div class="section_1">
      <div class="container">
        <h1>BUILDING ISPIRING SPACES</h1>
        <h5>We Build Ispiring Residential & Commercial Spaces</h5>
        <div>
          <div class="btn gray">EXPLORE RECENT WORK</div>
          <div class="btn">GET A QUOTE TODAY</div>
        </div>
      </div>
    </div>
    <div class="section_2">
      <div class="ask-project">
        <p>Do You Have A Construction Project We Can Help With?</p>
        <div class="btn gray">GET A FREE QUOTE</div>
      </div>
      <div class="container">
        <AppTitleSection
          :titlesSections="store.titlesSections[0]"
        ></AppTitleSection>
      </div>
      <div class="container-card">
        <div class="card-box">
          <div v-for="card in store.cards" class="card p-3">
            <AppCard :card="card"></AppCard>
          </div>
        </div>
      </div>
    </div>
    <div class="section_3">
      <div class="wave-top"></div>
      <div class="container-card">
        <div class="card-box">
          <div v-for="card in store.infoAgency" class="card">
            <AppCard :card="card"></AppCard>
          </div>
        </div>
      </div>
      <div class="wave-bottom"></div>
    </div>
    <div class="section_4">
      <div class="container py-5">
        <AppTitleSection
          :titlesSections="store.titlesSections[1]"
        ></AppTitleSection>
        <div class="container-img">
          <div class="img-box">
            <div v-for="image in store.images" class="img">
              <AppCardImg :image="image"></AppCardImg>
            </div>
          </div>
        </div>
        <div
          class="doubleLine-box d-flex align-items-center justify-content-between"
        >
          <div class="doubleLine"></div>
          <p>VIEW ALL PROJECT</p>
          <div class="doubleLine"></div>
        </div>
      </div>
    </div>
    <div class="section_5">
      <div class="container py-5">
        <AppTitleSection
          :titlesSections="store.titlesSections[2]"
        ></AppTitleSection>
        <div class="container-card">
          <div class="card-box">
            <div v-for="card in store.cardsValue" class="card">
              <AppCard :card="card"></AppCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_6">
      <div class="wave-top"></div>
      <div class="arrowleft" @click="nextSlide()">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </div>
      <div class="arrowright" @click="prevSlide()">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </div>
      <div class="container text-center py-5">
        <AppSlider></AppSlider>
      </div>
      <div class="wave-bottom"></div>
    </div>
    <div class="section_7">
      <div class="container pt-5 text-center">
        <AppTitleSection
          :titlesSections="store.titlesSections[3]"
        ></AppTitleSection>
        <div class="container-card">
          <div class="card-box">
            <div v-for="card in store.cardsImages" class="card">
              <AppTextCardImg :card="card"></AppTextCardImg>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between py-5">
          <div class="doubleLine"></div>
          <p class="textLine">VIEW ALL PROJECT</p>
          <div class="doubleLine"></div>
        </div>
      </div>
    </div>
    <div class="section_8">
      <div class="container py-5">
        <AppTitleSection
          :titlesSections="store.titlesSections[4]"
        ></AppTitleSection>
        <div class="container-img">
          <div class="img-box">
            <div v-for="partner in store.partners" class="img">
              <AppCardImg :image="partner"></AppCardImg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_9">
      <div class="container d-flex py-5">
        <AppTitleSection
          :titlesSections="store.titlesSections[5]"
        ></AppTitleSection>
        <div class="btn-box">
          <div class="btn">GET A FREE QUOTE</div>
          <p>Only Takes a Few Second</p>
        </div>
      </div>
    </div>
    <div class="arrow-box">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
      </a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
// ************SECTION 1************
.section_1 {
  background-image: url(../assets/construction/images/home-slider-62528242.jpg);
  height: calc(100vh - 100px);
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
      color: white;
      font-weight: bolder;
      font-size: 3.2rem;
      margin: 0;
    }

    h5 {
      color: #fed03d;
    }

    .btn {
      font-size: 1rem;
      margin: 0 0.5rem;
    }
  }
}

// ***********SECTION 2***********
.section_2 {
  z-index: 1;
  .ask-project {
    height: 100px;
    background-color: #fed03d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;

    p {
      font-size: 1.5rem;
    }

    .btn {
      position: absolute;
      bottom: -15px;
      border: 2px solid white;

      &:hover {
        background-color: white;
        color: #555;
        border: 2px solid #555;
      }
    }
  }

  .container {
    padding: 5rem 0;
    text-align: center;
  }

  .card-box {
    padding-bottom: 5rem;

    .card {
      background-color: #f5f5f5;
      color: #555;
      line-height: 2rem;
    }
  }
}

// *************SECTION 3***********
.section_3 {
  background-image: url(../assets/construction/images/home-244125289.jpg);
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-card {
    height: 100%;
    display: flex;
    align-items: center;

    .card-box {
      padding: 0 8rem;
      .card {
        background-color: transparent;
        color: #fed03d;
      }
    }
  }
}

// **********SECTION 4************
.section_4 {
  color: #555;

  .container-img {
    width: 100%;
    height: 274px;
    margin: 0 auto;
    padding: 2rem 0;

    .img-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .img {
        width: calc(100% / 3 - 10px);
        border: none;
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }

  .doubleLine-box {
    margin-top: 5rem;
    p {
      margin: 0;
    }
  }
}

// *************SECTION 5*************
.section_5 {
  color: #555;
  background-color: #f5f5f5;

  .container-card {
    width: 100%;

    .card {
      gap: 1rem;
      padding: 1rem 0;
      background-color: transparent;
      cursor: pointer;
    }
  }
}

// *************SECTION 6*************
.section_6 {
  color: white;
  height: 100vh;
  background-image: url(../assets/construction/images/home-parallax-144609983.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .wave-top {
    background-color: #f5f5f5;
  }

  .wave-bottom {
    background-color: #f5f5f5;
  }

  .arrowleft,
  .arrowright {
    font-size: 30px;
    cursor: pointer;
    width: 50px;
    border-radius: 50%;
    aspect-ratio: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;

    &:hover {
      background-color: rgba(255, 255, 255, 0.122);
    }
  }

  .arrowleft {
    left: 10rem;
  }

  .arrowright {
    right: 10rem;
  }
}

// *************SECTION 7*************
.section_7 {
  background-color: #f5f5f5;
  color: #555;

  .container {
    .textLine {
      margin: 0;
      padding: 0;
    }

    .container-card {
      width: 100%;
      margin-top: 3rem;

      .card {
        color: #555;
        overflow: hidden;
        text-align: start;
        width: calc(100% / 3 - 20px);
      }
    }
  }
}

.section_8 {
  .container-img {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;

    .img-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .img {
        width: calc(100% / 5 - 10px);
        border: none;
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }
}

.section_9 {
  color: white;
  background-image: url(../assets/construction/images/about-call-to-action-57862405.jpg);
  background-size: cover;
  background-position: bottom -100px right 0px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-box {
    width: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .btn {
      font-size: 18px;
    }

    p {
      font-size: 10px;
    }
  }
}
main {
  position: relative;
}

.arrow-box {
  background-color: hsla(0, 0%, 33%, 0.5);
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 12rem;
  cursor: pointer;

  a {
    color: #888;
  }

  &:hover {
    background-color: #545454;
  }
}
</style>
