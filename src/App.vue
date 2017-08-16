<style>

</style>

<template>

<div id="app" standalone>
    <v-toolbar dense fixed>

      <v-navigation-drawer
     class="grey lighten-4"
     persistent
     clipped
     hide-overlay
     height="100%"
     enable-resize-watcher
     v-model="drawer"
   >
     <v-list dense>
       <v-list-tile v-for="route in routesNames" :key="route.text" :to="route.url">
         <v-list-tile-content>
           <v-list-tile-title>
             {{ route.text }}
           </v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
   </v-navigation-drawer>
       <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-tabs fixed centered>
        <v-tabs-bar slot="activators" class="white">
          <v-tabs-slider class="indigo"></v-tabs-slider>
          <v-tabs-item class="hidden-sm-and-down" v-for="route in routesNames" :key="route.text" :to="route.url" :router="true">{{route.text}}</v-tabs-item>
        </v-tabs-bar>
      </v-tabs>
     <v-btn icon>
       <v-icon>more_vert</v-icon>
     </v-btn>
     <v-list-tile-avatar>
       <img src="./assets/bajju.jpg">
     </v-list-tile-avatar>
   </v-toolbar>
   <main>
       <router-view></router-view>
   </main>
   <br />
     <v-footer fixed class="pa-3 primary">
       <v-spacer></v-spacer>
       <div style="color:white;">© {{ new Date().getFullYear() }}</div>
     </v-footer>
</div>



</template>

<script>

export default {
    name: 'app',
    data(){
      return{
        drawer:'true',
    routesNames:[{
    class: "fa fa-user",
    text: "About",
    url: "/about"
}, {
    class: "fa fa-code",
    text: "Projects",
    url: "/projects"
}, {
    class: "fa fa-pencil-square",
    text: "Blog",
    url: "/blog"
}, {
    class: "fa fa-graduation-cap",
    text: "Work",
    url: "/experience"
}]
}
}
};
</script>
