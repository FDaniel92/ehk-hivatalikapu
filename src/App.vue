<template>
  <div id="app">
    <Header />
    <div class="container row justify-centered">
      <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
      <InfoBox pictureSrc="infobox-img-2.svg" pictureAlt="leírás a képhez" infoboxTitle="Hiteles azonosítás" infoboxParagraph="Ügyfelei beazonosítva, e-Papír vagy iForm üzeneteken keresztül, AVDH aláírással ellátva vehetik fel szervezetével a kapcsolatot, ezáltal a személyes megjelenést igénylő ügyintézés is redukálható." />
      <InfoBox pictureSrc="infobox-img-3.svg" pictureAlt="leírás a képhez" infoboxTitle="Integrálhatóság" infoboxParagraph="Az EHK összeköthető saját ügyviteli rendszerével, így a kommunikáció tömeges és automatizálható." />
    </div>
    <ContainerWithoutOuterBox />
    <img src="./assets/images/main-pics-1.png" class="container" alt="pontos leírás">
    <ContainerWithOuterBox />
    <ContainerWithoutOuterBox />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/modules/Header/Header.vue';
import InfoBox from '@/components/modules/InfoBox/InfoBox.vue';
import ContainerWithoutOuterBox from '@/components/modules/ContainerWithoutOuterBox/ContainerWithoutOuterBox.vue';
import ContainerWithOuterBox from '@/components/modules/ContainerWithOuterBox/ContainerWithOuterBox.vue';
import Footer from '@/components/modules/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    InfoBox,
    ContainerWithoutOuterBox,
    ContainerWithOuterBox,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'src/assets/styles/app.scss';
</style>
