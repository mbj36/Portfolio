<template>
  <div>
    <li v-for="proj in projects">
      <ul>{{proj.heading}}</ul>
      <ul>
        {{proj.description}}
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      projects: ''
    }
  },
  methods: {
    getProjectData() {
      this.$http.get('../../static/data/projects.json').then(response => {
        this.projects = response.data;
        console.log(response);
      });
    }
  },
  beforeMount() {
    //do something before mounting vue instance
    this.getProjectData()
  }
};
</script>
