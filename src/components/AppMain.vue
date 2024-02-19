<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
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
            <div>
              <font-awesome-icon :icon="card.iconCard" class="icon-card" />
            </div>
            <h4 class="m-0">{{ card.titleCard }}</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium ut cupiditate ad architecto quia ex.
            </p>
          </div>
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
    .line {
      width: 200px;
      height: 1px;
      background-color: #fed03d;
      margin: 2rem auto;
    }

    p {
      font-size: 12px;
    }
  }
  .container-card {
    width: 80%;
    margin: 0 auto;

    .card-box {
      width: 100%;
      display: flex;
      gap: 20px;

      .card {
        width: calc(100% / 4 - 20px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        background-color: #f5f5f5;
        border: none;
        border-radius: 10px;
        color: #555;
        line-height: 2rem;

        div {
          width: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #555;

          .icon-card {
            font-size: 20px;
          }
        }

        p {
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
</style>
