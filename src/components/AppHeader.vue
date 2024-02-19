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
  <header>
    <div class="header-container">
      <div class="logo">
        <img
          src="../assets/construction/images/construction_mobile_logo.png"
          alt="logo"
        />
      </div>
      <div>
        <ul>
          <li v-for="link in store.linksHeader">
            {{ link }}
            <div class="triangle-hover"></div>
          </li>
          <li class="button"><button class="btn">GET QUOTE</button></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: white;

  .header-container {
    width: 90%;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 1rem;
      font-size: 12px;
      color: #555;
      margin: 0;

      .button {
        padding: 0;
        background-color: #fed03d;

        &:hover {
          background-color: #fada70;
        }
      }

      .btn {
        padding: 6px 28px;
        border-radius: 0;
        font-size: 12px;
        color: #555;
      }

      li {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 20px 20px;

        &:hover {
          transition: 0.5s;
          color: #fed03d;
        }

        &:hover .triangle-hover {
          transition: 0.5s;
          opacity: 1;
        }
      }

      .triangle-hover {
        width: 16px;
        aspect-ratio: 1;
        transform: rotate(45deg);
        background-color: white;
        position: absolute;
        top: 70px;
        opacity: 0;
      }
    }
  }
}
</style>
