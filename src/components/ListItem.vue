<template>
  <div>
      <ul class="news-list">
        <li v-for="item in itemList" v-bind:key="item" class="post">
            <div class="points">
                {{ item.points }}
            </div>
            <div>
                <p class="news-title">
                    <a v-bind:href="item.url">
                    {{item.title}}
                    </a>
                </p>
                <small class="link-text">{{item.time_ago}} by 
                    <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
                </small>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
        itemList() {
            const name = this.$route.name;
            if(name === 'news') {
              return this.$store.state.news;    
            } else if (name === 'ask') {
              return this.$store.state.asks;  
            } else if (name === 'jobs') {
              return this.$store.state.jobs;  
            } else {
                return null
            }
        }
    },
    created() {
        const name = this.$route.name;
        let fetchData = "";
        if(name === 'news') {
            fetchData = 'FETCH_NEWS';
        } else if (name === 'ask') {
            fetchData = 'FETCH_ASKS';
        } else if (name === 'jobs') {
            fetchData = 'FETCH_JOBS';
        }
        this.$store.dispatch(fetchData);
    }
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828282;
}
</style>