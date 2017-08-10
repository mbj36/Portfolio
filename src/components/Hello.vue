<template>
  <div>
    <h1>Mohit</h1>
    <!--<ul>
      <li v-for="(item,index) in items">
        {{parentMessage}} - {{index}} - {{ item.message }}
      </li>
      <li v-for="n in 10">
        {{n}}
      </li>
    </ul>
    <button v-on:click="counter+= 1">Add +1</button>
    <span>This button has been clicked {{ counter }} times</span>
    <button v-on:click="Greet">Greet fucker</button>
    <button v-on:click="say('hi')">Hi bolo</button>
    <button v-on:click="warn('Form cannot be submitted yet', $event)">Submit</button>
    <input v-model="message1" placeholder="editme">
    <p>
      Message is {{ message1 }}
    </p>
    <input type="checkbox" v-model="checked" />
    <label for="checkbox">{{checked}}</label>
    <button v-on:click="show=!show">Press Me</button>
    <transition name="fade"><p v-if="show">
      Hello
    </p></transition>
  -->
  </div>


</template>

<script>
export default {
  name: 'hello'
  /*
  function(){
    return{
      show:false,
      counter:0,
      message1:"Help",
      checked:false,
      parentMessage: "baap",
      items:[
        {message:'Foo'},
        {message:'Bar'}
      ]
    }
  },
  methods: {
    Greet() {
      alert('Say' + this.name );
    },
    say(message){
      alert(message)
    },
    warn(message, event){
      if(event) event.preventDefault()
      alert(message)
    }
  }
  */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
