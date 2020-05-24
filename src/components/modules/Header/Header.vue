<template>
  <nav class="navigation">
    <section class="navigation__container">
        <img src="@/assets/images/EHK_logo.svg" alt="EHK logó" class="navigation__logo" />
        <ul class="navigation__list-container" v-bind:class="{ open: isActive }">
            <li class="navigation__list-item" v-scroll-to="'#jbk'">JBK</li>
            <li class="navigation__list-item" v-scroll-to="'#advantages'">A rendszer előnyei</li>
            <li class="navigation__list-item" v-scroll-to="'#modules'">Modulok</li>
            <li class="navigation__list-item" v-scroll-to="'#connect'">Kapcsolat</li>
        </ul>
        
        <div class="navigation__burger-menu" v-on:click="toggleBurgerMenu" v-bind:class="{ open: isActive }">
            <div class="burger-menu-icon"></div>
        </div>
    </section>

    <section class="navigation__main-title">
        <h1>
            Jogi behajtási keretrendszer
        </h1>
        <hr>
        <p>
            Fizetési meghagyások, peres és végrehajtási ügyek széleskörű nyilvántartása, nyomon követése
        </p>
    </section>
  </nav>
</template>

<script src="./Header.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './Header.scss';
</style>