<template>
  <div id="app">
    <Header />
    <div class="container sm-column row justify-centered">
      <InfoBox pictureSrc="infobox-img-1.svg" urlSrc="https://www.google.hu/" pictureAlt="leírás a képhez" infoboxTitle="e-FMH modul" infoboxParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
      <InfoBox pictureSrc="infobox-img-2.svg" urlSrc="https://www.google.hu/" pictureAlt="leírás a képhez" infoboxTitle="Bírósági modul" infoboxParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
      <InfoBox pictureSrc="infobox-img-3.svg" urlSrc="https://www.google.hu/" pictureAlt="leírás a képhez" infoboxTitle="e-Végrehajtás modul" infoboxParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
    </div>
    <div class="text-container">
      <ContainerHeader ContainerHeaderTitle="Mi az a JBK?" id="advantages" />
       <div class="sm-column row">
            <div class="text-container__left-txt">
                <p>
                  A JBK böngészőből elérhető, személyre szabott rendszer és szolgáltatás egyben.
                  <br>
                  <br>
                  A  rendszerben lehetőség nyílik a fizetési meghagyások, peres és végrehajtás ügyek széleskörű nyilvántartására, nyomon követésére.
                  <br>
                  <br>
                  Közvetlen, előírás szerint authentikált elektronikus kommunikációt folytathatunk az Országos Bírósági Hivatallal és a Magyar Bírósági Végrehajtói Kar VIEKR rendszerével, továbbá a JBK-n keresztül generált FMH és VH kérelmek adatai a Magyar Országos Közjegyzői Kamara rendszeréből frissíthetőek.
                  <br>
                  <br>
                  Rendszerünkben egy jogi útra terelt ügy teljes életciklusa lekövethető, a különböző szakaszok önálló ügyként értelmezettek, azonban láncként kapcsolódnak össze.
                </p>
            </div>
            <div class="column text-container__right-txt">
                <p>Iktatás</p>
                <p>Értesítések rendszeren belül és kívül</p>
                <p>Szervezeti egységek szerinti munkavégzés</p>
                <p>Belső üzenetek</p>
                <p>Riportok, adatszolgáltatás</p>
                <p>Értékkészletek</p>
                <p>Kereső funkció</p>
                <p>Ügyek átadása, adatszinkronizálás</p>
                <p>Interface kommunikáció</p>
            </div>
        </div>
    </div>
    <div class="container">
      <img src="./assets/images/main-pics-1.png" class="main-image" alt="pontos leírás">
    </div>
    <div class="container-outerbox">
      <ContainerHeader ContainerHeaderTitle="A rendszer előnyei" id="advantages" ContainerHeaderParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis malesuada viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc iaculis rutrum enim, vitae condimentum justo congue in. Nullam odio risus, ultricies lacinia nibh id, laoreet interdum justo." />
        <div class="container sm-column row justify-centered">
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
        </div>
        <div class="container sm-column row justify-centered">
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
            <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
        </div>
    </div>
    
    <div class="text-container text-container--centered">
       <ContainerHeader ContainerHeaderTitle="Modulok" ContainerHeaderParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis malesuada viverra. Nullam odio risus, ultricies lacinia nibh id, laoreet interdum justo." id="modules" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/modules/Header/Header.vue';
import InfoBox from '@/components/modules/InfoBox/InfoBox.vue';
import ContainerHeader from '@/components/modules/ContainerHeader/ContainerHeader.vue';
import Footer from '@/components/modules/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    InfoBox,
    ContainerHeader,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'src/assets/styles/app.scss';
</style>
