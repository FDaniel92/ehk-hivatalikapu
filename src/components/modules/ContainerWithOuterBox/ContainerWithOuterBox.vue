<template>
    <section class="outer-text-container">
        <div class="outer-text-container__title">
            <h2>
                Mi az a JBK?
            </h2>
            <hr>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis malesuada viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc iaculis rutrum enim, vitae condimentum justo congue in. Nullam odio risus, ultricies lacinia nibh id, laoreet interdum justo.
            </p>
        </div>
        <div class="container row justify-centered">
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
        </div>
        <div class="container row justify-centered">
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
        </div>
    </section>
</template>

<script>
import InfoBox from '@/components/modules/InfoBox/InfoBox.vue';

export default {
  name: 'App',
  components: {
    InfoBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/assets/styles/template/variables/_variables.scss";
   .outer-text-container {
       width: 100%;
       margin: 150px 0;
       background: $color-4;
       position: relative;

       &__title {
           background: $color-3;
           padding: 20px;
           width: 100%;
           max-width: 1200px;
           margin: 0 auto;
           color: white;
           text-align: center;
           position: relative;
           top: -70px;
            h2 {
                font-size: $md-font-size;
            }
            hr {
                width: 40px;
                height: 4px;
                background: $color-2;
                margin: 20px auto;
            }
        }
        .infobox {
            position: initial;
            margin-bottom: 30px;
        }
   }
</style>