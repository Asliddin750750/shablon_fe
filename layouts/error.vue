<template>
  <h1 class="text-center">{{ error.statusCode }}</h1>
</template>


<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
