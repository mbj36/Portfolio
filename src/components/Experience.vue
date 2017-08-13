<template>
<div>
  <br />
    <main>
     <v-container fluid style="min-height: 0;" grid-list-lg>
       <v-layout row wrap>
         <v-flex xs12 sm6 offset-sm3>
           <v-card class="grey lighten-4 ma-3" v-for="info in exps" :key="info.title">
             <v-card-title primary-title>
               <img :src="info.img" height="100px" />
               <div class="headline">&nbsp; {{info.heading}}</div>
               <div class="text-xs-center">
               <v-btn round primary dark>{{info.duration}}</v-btn>
             </div>
             <div class="text-xs-center">
               <v-btn dark secondary round>{{info.description}}</v-btn>
             </div>
             </v-card-title>
             <v-card-actions>
               <v-chip close v-for="tag in info.tags" :key="tag.tags">{{tag}}</v-chip>
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
  name:'Experience',
  data(){
    return{
    exps:'',
    ready:0
  }
  },
  methods: {
    getExpData() {
      this.$http.get('../../static/data/work.json').then(response =>{
        this.exps =  response.data;
        this.ready =1;
        console.log(response);
      })
    }
  },
  beforeMount() {
    //do something before mounting vue instance
    this.getExpData();
  }
};
</script>

<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem
</style>
