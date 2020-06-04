<template>
  <div id="app">

    <Header />

    <ContainerHeader class="navigation-header" ContainerHeaderTitle="e-Hivatali Kapu" ContainerHeaderParagraph="GYORS, PONTOS ÉS HITELES KAPCSOLATTARTÁS AZ ÜGYFELEKKEL" />
    
    <div class="container md-column row justify-centered">
      <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" id="advantages" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
      <InfoBox pictureSrc="infobox-img-2.svg" pictureAlt="leírás a képhez" infoboxTitle="Hiteles azonosítás" infoboxParagraph="Ügyfelei beazonosítva, e-Papír vagy iForm üzeneteken keresztül, AVDH aláírással ellátva vehetik fel szervezetével a kapcsolatot, ezáltal a személyes megjelenést igénylő ügyintézés is redukálható." />
      <InfoBox pictureSrc="infobox-img-3.svg" pictureAlt="leírás a képhez" infoboxTitle="Integrálhatóság" infoboxParagraph="Az EHK összeköthető saját ügyviteli rendszerével, így a kommunikáció tömeges és automatizálható." />
    </div>
    
    <div class="container-outerbox">
        <div class="container">
          <ContainerHeader ContainerHeaderTitle="Gépi interface előnyei" id="interface" ContainerHeaderParagraph="Hivatali tárhelyéhez ingyenesen igényelhető gépi interface kapcsolat, ami az EHK szolgáltatással kiegészülve az alábbi lehetőségeket nyitja megszervezete számára az elektronikus ügyintézési térben:" />
        </div>
        <div class="container md-column row justify-centered">
            <InfoBox pictureSrc="infobox-img-4.svg" pictureAlt="leírás a képhez" infoboxTitle="Állami nyilvántartások" infoboxParagraph="Adatlekérések állami adatbázisokból - pl. személyi adat- és lakcímnyilvántartás. Az ügyfélkapu tulajdonosát a Központi Azonosítási Ügynök (KAÜ) azonosítja be." />
            <InfoBox pictureSrc="infobox-img-5.svg" pictureAlt="leírás a képhez" infoboxTitle="Tematizált üzenetek" infoboxParagraph="Az e-Papír és iForm űrlapok rendszeresítésével a beérkező ügyfélüzenetek feldolgozása szabályozott és automatizálható. Elektronikus szerződéskötési és módosítási folyamatok." />
            <InfoBox pictureSrc="infobox-img-6.svg" pictureAlt="leírás a képhez" infoboxTitle="Automatikus szortírozás" infoboxParagraph="A bejövő üzenetek kiegészítő adatai alapján, az összes levél közvetlenül az érintett rendszerbe vagy területhez érkeztethető." />
        </div>
        <div class="container md-column row justify-centered">
            <InfoBox pictureSrc="infobox-img-7.svg" pictureAlt="leírás a képhez" infoboxTitle="Tömeges kezelés" infoboxParagraph="Tömegesen létrehozható és egy PIN-kód megadásával aláírható kimenő üzenetek, melyeket időbélyeggel is ellát a rendszer." />
            <InfoBox pictureSrc="infobox-img-8.svg" pictureAlt="leírás a képhez" infoboxTitle="Kötelező és pontos átvétel" infoboxParagraph="Elsődleges kézbesítési címre, azaz cégkapu és ügyfélkapu fiókokba küldött ügyfélüzenetek, ahol kötelező az átvétel, vagy kézbesítési vélelem áll be." />
            <InfoBox pictureSrc="infobox-img-9.svg" pictureAlt="leírás a képhez" infoboxTitle="Tértivevényes levelek" infoboxParagraph="Minden üzenethez feladóvevény és tértivevény tartozik, melyeket az EHK rendszere automatikusan társít a kimenő levelekhez." />
        </div>
            <div class="container md-column row justify-centered">
            <InfoBox pictureSrc="infobox-img-10.svg" pictureAlt="leírás a képhez" infoboxTitle="Naplózás és nyomon követés" infoboxParagraph="Minden üzenet összes változása és állapota naplózott a rendszerben, ezáltal visszakövethető." />
            <InfoBox pictureSrc="infobox-img-11.svg" pictureAlt="leírás a képhez" infoboxTitle="Jogosultságkezelés" infoboxParagraph="A felhasználók csak saját területük üzeneteit láthatják. A rendszer alkalmas szerepkör szerinti jogosultságok kiosztására is." />
            <InfoBox pictureSrc="infobox-img-12.svg" pictureAlt="leírás a képhez" infoboxTitle="Üzenetek tárolása" infoboxParagraph="Az EHK rendszere minden üzenetet 5 évig tárol, meghatározott méretkorlátozás nélkül." />
        </div>
    </div>

    <div class="container" id="system-operation">
      <ContainerHeader class="without-bg" ContainerHeaderTitle="A rendszer működése" id="advantages" />
      <img src="./assets/images/main-pics-1.png" class="main-image" alt="pontos leírás">
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
