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
  <div
    v-if="card.backgroundColor"
    :class="
      card.backgroundColor == 'turquoise'
        ? 'turquoise'
        : card.backgroundColor == 'blue'
        ? 'blue'
        : card.backgroundColor == 'orange'
        ? 'orange'
        : 'green'
    "
  >
    <font-awesome-icon :icon="card.iconCard" class="icon-card" />
  </div>
  <div v-else>
    <font-awesome-icon :icon="card.iconCard" class="icon-card" />
  </div>
  <h4 class="m-0">{{ card.titleCard }}</h4>
  <span>{{ card.line }}</span>
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

.section_5 {
  color: #555;

  div {
    width: 90px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .turquoise {
      background-color: #4ea4a5;
    }
    .orange {
      background-color: #f6722a;
    }
    .green {
      background-color: #a7cf47;
    }
    .blue {
      background-color: #4e6da5;
    }

    .icon-card {
      color: white;
      font-size: 40px;
    }
  }

  span {
    width: 10%;
    height: 1px;
    background-color: #777;
  }

  h4 {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }
}
</style>
