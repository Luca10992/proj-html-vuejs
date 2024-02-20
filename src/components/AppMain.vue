<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppCardImg from "./AppCardImg.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard, AppCardImg },
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
        <div>
          <p class="fs-4">Specialists In Modern Construction</p>
          <div class="line"></div>
          <p class="px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            fugiat facilis dolor nostrum impedit veritatis quidem sequi nam eos.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
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
      <div class="container-card">
        <div class="card-box">
          <div v-for="card in store.infoAgency" class="card">
            <AppCard :card="card"></AppCard>
          </div>
        </div>
      </div>
    </div>
    <div class="section_4">
      <div class="container py-5">
        <div class="text-center">
          <h3>Explore Recent Work</h3>
          <div class="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
            dolorum magni ipsum distinctio nihil, delectus, similique voluptates
            laudantium maiores magnam, exercitationem vel fugit quos minus
            impedit at itaque repellat.
          </p>
        </div>
        <div class="container-img">
          <div class="img-box">
            <div v-for="image in store.images" class="img">
              <AppCardImg :image="image"></AppCardImg>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="doubleLine"></div>
          <p>VIEW ALL PROJECT</p>
          <div class="doubleLine"></div>
        </div>
      </div>
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

    p {
      font-size: 12px;
    }
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
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

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

  h3 {
    font-weight: 300;
  }

  p {
    font-size: 12px;
  }

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
        width: calc(100% / 3 - 10px);
        border: none;
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }

  .d-flex {
    p {
      margin: 0;
    }
  }
}
</style>
