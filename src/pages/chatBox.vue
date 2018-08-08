<template>
  <div>
    <h4>chat area</h4>
    <h5>{{ name }}</h5>
    <ul>
      <li v-for="arr in arrs" :key="arr">{{ arr.red }}</li>
    </ul>
    <div>
      <q-input :value="model" @change="val => { model = val }" />
      <q-btn @click="add" label="Add" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'test',
      arrs: [
        {red: 'dsadsad', message: 'sdsada'},
        {red: 'reddd', message: 'sdsewdeada'}
      ]
    }
  },
  methods: {
    add () {
      this.arrs.push({ red: 'fwesda', message: 'dsadasda' })
    }
  }
}
</script>
