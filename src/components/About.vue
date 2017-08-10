<template>
<div>
<h3 v-for="skill in abouts.skillsets">{{skill.type}}</h3>
</div>
</template>


<script>
export default{
  name: 'About',
  data(){
    return{
      abouts:''
    }
  },
  methods: {
    getAboutData() {
      this.$http.get('../../static/data/about.json').then(response => {
        this.abouts = response.data;
        console.log(response);
      });
    }
    },
    beforeMount() {
      //do something before mounting vue instance
      this.getAboutData();
    }
};
</script>
