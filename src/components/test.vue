<template>
 <div>
        test
 </div>
</template>

<script>
 export default {
   name: 'test',
   data () {
     return {

     }
   },
   mounted () {
       this.$store.commit("changeactive",1);
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>

 
</style>
