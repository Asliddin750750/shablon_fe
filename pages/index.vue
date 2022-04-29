<template>
  <Navbar/>
</template>


<script>
import example from "~/middleware/example";

export default {
  name: 'IndexPage',
  middleware: [example]
}
</script>
