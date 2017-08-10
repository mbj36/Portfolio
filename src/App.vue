<style>



</style>

<template>

<div id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-tabs dark fixed centered>
        <v-tabs-bar class="white">
          <v-tabs-slider class="yellow"></v-tabs-slider>
          <v-tabs-item v-for="route in routesNames" :key="route.id" :href="route.url" :router="true">{{route.text}}</v-tabs-item>
        </v-tabs-bar>
      </v-tabs>
     <v-btn icon>
       <v-icon>apps</v-icon>
     </v-btn>
     <v-btn icon>
       <v-icon>more_vert</v-icon>
     </v-btn>
   </v-toolbar>
        <router-view></router-view>
</div>



</template>

<script>

export default {
    name: 'app',
    data(){
      return{
    routesNames:[{
    class: "fa fa-user",
    text: "About",
    url: "#/about"
}, {
    class: "fa fa-code",
    text: "Projects",
    url: "#/projects"
}, {
    class: "fa fa-pencil-square",
    text: "Blog",
    url: "#/blog"
}, {
    class: "fa fa-graduation-cap",
    text: "Work",
    url: "#/experience"
}]
}
}
};
</script>
