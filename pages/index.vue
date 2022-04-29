<template>
  <div>
    {{ hello }}
  </div>
</template>


<script>
// import example from "~/middleware/example";

export default {
  name: 'IndexPage',
  // middleware: [example],
  async asyncData(context) {
    const hello = (await context.$axios.get('account/me/')).data
    return {
      hello
    }
  },
  data() {
    return {
      hello: null
    }
  }
}
</script>
