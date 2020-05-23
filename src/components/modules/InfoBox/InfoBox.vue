<template>
    <section class="infobox">
        <img class="infobox__image" :src="resolve_img_url(pictureSrc)" :alt="pictureAlt">
        <h2>
          {{infoboxTitle}}
        </h2>
        <p>
          {{infoboxParagraph}}
        </p>
    </section>
</template>

<script src="./InfoBox.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './InfoBox.scss';
</style>