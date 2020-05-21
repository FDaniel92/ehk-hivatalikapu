<template>
  <div id="app">
    <Header />
    <!-- <InfoBox infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
    <InfoBox infoboxTitle="Hiteles azonosítás" infoboxParagraph="Ügyfelei beazonosítva, e-Papír vagy iForm üzeneteken keresztül, AVDH aláírással ellátva vehetik fel szervezetével a kapcsolatot, ezáltal a személyes megjelenést igénylő ügyintézés is redukálható." />
    <InfoBox infoboxTitle="Integrálhatóság" infoboxParagraph="Az EHK összeköthető saját ügyviteli rendszerével, így a kommunikáció tömeges és automatizálható." /> -->
  </div>
</template>

<script>
import Header from '@/components/modules/Header/Header.vue'
// import InfoBox from '@/components/modules/InfoBox/InfoBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    // InfoBox
  }
}
</script>

<style lang="scss">
  @import 'src/assets/styles/app.scss';
</style>
