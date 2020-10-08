<template>
  <div>
    <section>
      <user-profile :info="fetchedComment">
        <router-link slot="username" :to="`/user/${fetchedComment.user}`">
            {{ fetchedComment.user }}
        </router-link>
        <template slot="time">Posted {{ fetchedComment.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedComment.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedComment.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
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