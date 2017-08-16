<template>
<div>
  <br />
    <main>
     <v-container fluid style="min-height: 0;" grid-list-lg>
       <v-layout row wrap>
         <v-flex xs12 sm6 offset-sm3>
           <v-card class="grey lighten-4 ma-3" v-for="info in blogs" :key="info.title">
             <v-card-title primary-title>
               <div class="headline">{{info.title}}</div>
             </v-card-title>
             <v-card-actions>
               <v-btn :href="info.link" target="_blank" class=
               "secondary white--text"> Read More</v-btn>
               <v-chip class="primary white--text" close>GSOC</v-chip>
               <v-chip class="primary white--text" close>Web</v-chip>
             </v-card-actions>
           </v-card>
         </v-flex>
       </v-layout>
     </v-container>
   </main>
</div>
</template>

<script>
export default{
  name:'Blog',
  data(){
    return{
    blogs:'',
    ready:0
  }
  },
  methods: {
    getBlogData() {
      this.$http.get('../../static/data/blogs.json').then(response =>{
        this.blogs =  response.data;
        this.ready =1;
        console.log(response);
      })
    }
  },
  beforeMount() {
    //do something before mounting vue instance
    this.getBlogData();
  }
};
</script>

<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem
</style>
