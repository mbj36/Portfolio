<template>
  <div>
    <br />
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="indigo darken-1">
        <v-list-tile-avatar>
          <img src="../../static/bajju1.jpeg" class="image">
        </v-list-tile-avatar>
      </v-card>
      <v-card-text class="text-xs-center">Mohit Kumar Bajoria</v-card-text>
      <div class="text-xs-center">
        <span class="ml-2" v-for="link in abouts.links" :key="+link">
          <a :href="link.url" target="_blank">
            <v-icon>fa {{link.icon}}</v-icon>
          </a>
        </span>
      </div>
    </br>
      <v-card>
        <v-card-text>
          <p v-html="myself"></p>
        </v-card-text>
      </v-card>
      <br />
      <v-card class="indigo darken-1">
        <v-card-text class="text-xs-center white--text">
          Download Resume
        </v-card-text>
      </v-card>
      <br />
      <v-card>
        <div v-for="skill in abouts.skillsets" :key="skill.type">
        <v-btn secondary>
          <v-icon>fa {{skill.icon}}</v-icon>&nbsp; {{skill.type}}
        </v-btn>
        <v-btn primary v-for="skill in skill.skills" :key="+skill">{{skill}}</v-btn>
      </div>
      <br />
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>


<script>
export default{
  name: 'About',
  data(){
    return{
      abouts:'',
      name: 'Mohit Kumar Bajoria',
      myself:'Open-source Enthusiastic, Two times <b>Google Summer of Code Student</b>, JavaScript Developer, Progressive Web Apps, Mentor at Google Code-In, CodeClub Member, Working on client side technologies to Provide offline support to the Web. Great Interest in developing scalable <b>Progressive web apps</b>. Trying to make Web Great Again '
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
<style>
.image{
  height: 150px !important;
  width: 150px !important;
  padding: 1%;
}
a{
  color: inherit;
}
a, u{
  text-decoration: none;
}

</style>
