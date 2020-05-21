<template>
  <div class="infobox">
      <div class="infobox__image"></div>
      <h2>
        {{infoboxTitle}}
      </h2>
      <p>
        {{infoboxParagraph}}
      </p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/assets/styles/template/variables/_variables.scss";
   .infobox {
       padding: 20px;
       height: 100%;
       min-height: 470px;
       width: 380px;
       background: $color-1;
       text-align: center;
       display: inline-block;
       vertical-align: top;
       border: 1px solid black;
       &__image {
           width: 120px;
           height: 120px;
           background-size: cover;
           background-repeat: no-repeat;
       }
       h2 {
        font-size: 20px;
        margin-bottom: 20px;
       }
       p {
        font-size: 15px;
       }
    }
</style>

<script>
export default {
  name: 'InfoBox',
  props: {
    infoboxTitle: String,
    infoboxParagraph: String
  }
}
</script>