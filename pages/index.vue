<template>
  <div id="app" class="ehk">
    <ejm-header :isHidden="false">
      <img
        loading="lazy"
        slot="navigationLogo"
        src="~@/assets/images/EHK_logo.svg"
        alt="EHK logó"
      />
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#advantages'"
      >
        Előnyök
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#interface'"
      >
        Gépi interface
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#system-operation'"
      >
        Rendszer működése
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#connect'"
      >
        Kapcsolat
      </li>
    </ejm-header>

    <ejm-carousel class="header-navigation">
      <div class="carousel-block one" slot="carouselBlock">
        <div class="header-carousel-main-title">
          <h1>e-Hivatali Kapu</h1>
          <hr />
          <h2>
            GYORS, PONTOS ÉS HITELES <br />
            KAPCSOLATTARTÁS AZ ÜGYFELEKKEL
          </h2>
        </div>
      </div>
    </ejm-carousel>

    <section class="container row md-column justify-centered">
      <ejm-info-box id="advantages">
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/infobox-img-1.svg"
          alt="Hitelesített üzenetek"
        />
        <h2 slot="infoboxTitle">Hitelesített üzenetek</h2>
        <p slot="infoboxParagraph">
          A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek
          küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények
          száma nagymértékben lecsökkenthető.
        </p>
      </ejm-info-box>

      <ejm-info-box>
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/infobox-img-2.svg"
          alt="Hiteles azonosítás"
        />
        <h2 slot="infoboxTitle">Hiteles azonosítás</h2>
        <p slot="infoboxParagraph">
          Ügyfelei beazonosítva, e-Papír vagy iForm üzeneteken keresztül, AVDH
          aláírással ellátva vehetik fel szervezetével a kapcsolatot, ezáltal a
          személyes megjelenést igénylő ügyintézés is redukálható.
        </p>
      </ejm-info-box>

      <ejm-info-box>
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/infobox-img-3.svg"
          alt="Integrálhatóság"
        />
        <h2 slot="infoboxTitle">Integrálhatóság</h2>
        <p slot="infoboxParagraph">
          Az EHK összeköthető saját ügyviteli rendszerével, így a kommunikáció
          tömeges és automatizálható.
        </p>
      </ejm-info-box>
    </section>

    <section class="container-outerbox">
      <ejm-container-header id="interface">
        <h2 slot="ContainerHeaderTitle">Gépi interface előnyei</h2>
        <p slot="containerHeaderParagraph">
          Hivatali tárhelyéhez ingyenesen igényelhető gépi interface kapcsolat,
          ami az EHK szolgáltatással kiegészülve az alábbi lehetőségeket nyitja
          meg szervezete számára az elektronikus ügyintézési térben:
        </p>
      </ejm-container-header>

      <div class="container md-column row justify-centered">
        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-4.svg"
            alt="Állami nyilvántartások"
          />
          <h2 slot="infoboxTitle">Állami nyilvántartások</h2>
          <p slot="infoboxParagraph">
            Adatlekérések állami adatbázisokból - pl. személyi adat- és
            lakcímnyilvántartás. Az ügyfélkapu tulajdonosát a Központi
            Azonosítási Ügynök (KAÜ) azonosítja be.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-5.svg"
            alt="Tematizált üzenetek"
          />
          <h2 slot="infoboxTitle">Tematizált üzenetek</h2>
          <p slot="infoboxParagraph">
            Az e-Papír és iForm űrlapok rendszeresítésével a beérkező
            ügyfélüzenetek feldolgozása szabályozott és automatizálható.
            Elektronikus szerződéskötési és módosítási folyamatok.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-6.svg"
            alt="Automatikus szortírozás"
          />
          <h2 slot="infoboxTitle">Automatikus szortírozás</h2>
          <p slot="infoboxParagraph">
            A bejövő üzenetek kiegészítő adatai alapján, az összes levél
            közvetlenül az érintett rendszerbe vagy területhez érkeztethető.
          </p>
        </ejm-info-box>
      </div>

      <div class="container md-column row justify-centered">
        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-7.svg"
            alt="Tömeges kezelés"
          />
          <h2 slot="infoboxTitle">Tömeges kezelés</h2>
          <p slot="infoboxParagraph">
            Tömegesen létrehozható és egy PIN-kód megadásával aláírható kimenő
            üzenetek, melyeket időbélyeggel is ellát a rendszer.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-8.svg"
            alt="Kötelező és pontos átvétel"
          />
          <h2 slot="infoboxTitle">Kötelező és pontos átvétel</h2>
          <p slot="infoboxParagraph">
            Elsődleges kézbesítési címre, azaz cégkapu és ügyfélkapu fiókokba
            küldött ügyfélüzenetek, ahol kötelező az átvétel, vagy kézbesítési
            vélelem áll be.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-9.svg"
            alt="Tértivevényes levelek"
          />
          <h2 slot="infoboxTitle">Tértivevényes levelek</h2>
          <p slot="infoboxParagraph">
            Minden üzenethez feladóvevény és tértivevény tartozik, melyeket az
            EHK rendszere automatikusan társít a kimenő levelekhez.
          </p>
        </ejm-info-box>
      </div>

      <div class="container md-column row justify-centered">
        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-10.svg"
            alt="Naplózás és nyomon követés"
          />
          <h2 slot="infoboxTitle">Naplózás és nyomon követés</h2>
          <p slot="infoboxParagraph">
            Minden üzenet összes változása és állapota naplózott a rendszerben,
            ezáltal visszakövethető.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-11.svg"
            alt="Jogosultságkezelés"
          />
          <h2 slot="infoboxTitle">Jogosultságkezelés</h2>
          <p slot="infoboxParagraph">
            A felhasználók csak saját területük üzeneteit láthatják. A rendszer
            alkalmas szerepkör szerinti jogosultságok kiosztására is.
          </p>
        </ejm-info-box>

        <ejm-info-box>
          <img
            slot="infoboxImage"
            src="~@/assets/images/infobox-img-12.svg"
            alt="Üzenetek tárolása"
          />
          <h2 slot="infoboxTitle">Üzenetek tárolása</h2>
          <p slot="infoboxParagraph">
            Az EHK rendszere minden üzenetet 5 évig tárol, meghatározott
            méretkorlátozás nélkül.
          </p>
        </ejm-info-box>
      </div>
    </section>

    <section class="container-fluid">
      <div class="container" id="system-operation">
        <ejm-container-header class="without-bg" id="system-operation">
          <h2 slot="ContainerHeaderTitle">Rendszer működése</h2>
        </ejm-container-header>
        <img
          loading="lazy"
          src="~@/assets/images/system.svg"
          class="main-image"
          alt="EHK - rendszer működése"
        />
      </div>
    </section>

    <ejm-footer id="connect">
      <p slot="aboutContentFooter">
        Az e-Jogsegéd, a hiteles elektronikus ügyintézés szakértőjeként, könnyen
        kezelhető, megoldásorientált szolgáltatásokat kínál a mindennapi
        digitális feladatok kezelésére. Innovatív szoftverek és rendszerek
        fejlesztése mellett, kimagasló szaktudást és folyamatos szakértői
        támogatást nyújtunk ügyfeleink elektronikus ügymeneteihez.
      </p>
      <div slot="connectPersons">
        <p class="strong-names">Ifj. Lengyel Tibor</p>
        <p>ügyvezető igazgató</p>
        <p>06 30/933-8083</p>
        <p>ifj.lengyel@ejogseged.hu</p>
        <br />
        <br />
        <p class="strong-names">Várnai Soma</p>
        <p>operatív igazgató,</p>
        <p>adatvédelmi tisztviselő</p>
        <p>06 30/317-7239</p>
        <p>varnai.soma@ejogseged.hu</p>
      </div>
      <a
        href="https://www.e-cegkapu.hu/?gclid=EAIaIQobChMIiZrNhYT36gIV1_hRCh35AgJXEAAYASAAEgKvaPD_BwE"
        target="_blank"
        rel="noreferrer"
        slot="productsListFooter"
        >e-Cégkapu</a
      >
      <a
        href="/"
        rel="noreferrer"
        slot="productsListFooter"
        >e-Hivatali Kapu</a
      >
      <a
        href="https://www.jbk.hu/"
        target="_blank"
        rel="noreferrer"
        slot="productsListFooter"
        >JBK</a
      >
      <a href="https://www.jbklight.hu/" target="_blank" rel="noreferrer" slot="productsListFooter"
        >JBK light</a
      >
      <img
        loading="lazy"
        slot="footerEjsLogo"
        src="~@/assets/images/ejogseged_logo.svg"
        alt="e-jogsegéd logó"
      />
      <p slot="privacyStatement">
        <a href="/Adatvedelmi_Tajekoztato_EHK_02.pdf" target="_blank"
          >Adatvédelmi tájékoztató</a
        >
      </p>
      <img
        loading="lazy"
        slot="footerFacebookLogo"
        src="~@/assets/images/facebook-logo.png"
        alt="Facebook logó"
      />
    </ejm-footer>

    <ejm-cookie>
      <p slot="cookieParagraph">
        Weboldalunkon
        <a href="/Suti_Szabalyzat_ECK_EHK_JBK_EJS_01.pdf" target="_blank"
          >sütiket</a
        >
        (cookie) használunk, hogy biztonságos böngészés mellett a legjobb
        felhasználói élményt nyújthassuk. A honlap további böngészésével
        hozzájárul a sütik használatához.
        <a href="/Adatvedelmi_Tajekoztato_EHK_02.pdf" target="_blank"
          >Adatvédelmi tájékoztatónkban</a
        >
        megtalálja, hogyan gondoskodunk adatai védelméről.
      </p>
    </ejm-cookie>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "e-Hivatali Kapu",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:url", content: process.env.baseUrl },
        { property: "og:title", content: "e-Hivatali Kapu" },
        {
          property: "og:description",
          content:
            "Kezelje hivatali tárhelyen keresztül hitelesített, tértivevényes üzeneteit tömeges és automatizálható módon!",
        },
        {
          property: "og:image",
          content: process.env.baseUrl + "/header-bg.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/fonts.css";
@import "~@/assets/styles/base.scss";
@import "~@/assets/styles/reset.scss";
</style>
