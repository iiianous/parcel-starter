<template>
  <ul>
    <li
      v-for="(item, index) in lists"
      :key="index"
      >{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'list one'
        },
        {
          id: 2,
          name: 'list two'
        },
        {
          id: 3,
          name: 'list three'
        }
      ]
    }
  }
}
</script>
