<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: { card: Object },
};
</script>
<template>
  <div>
    <font-awesome-icon :icon="card.iconCard" class="icon-card" />
  </div>
  <h4 class="m-0">{{ card.titleCard }}</h4>
  <p>
    {{ card.titleInfo }}
  </p>
</template>

<style lang="scss" scoped>
.section_2 {
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

.section_3 {
  .card {
    .icon-card {
      font-size: 50px;
    }

    h4 {
      font-size: 50px;
    }

    p {
      color: white;
      font-size: 12px;
    }
  }
}
</style>
