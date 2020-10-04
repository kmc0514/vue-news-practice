<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedComment.user}`">
            {{ fetchedComment.user }}
          </router-link>
          <div class="time">
            {{ fetchedComment.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedComment.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedComment.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedComment'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_COMMENT', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>