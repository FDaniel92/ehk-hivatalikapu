<template>
  <nav class="navigation">
    <section class="navigation__container">
        <img src="@/assets/images/EHK_logo.svg" alt="EHK logó" class="navigation__logo" />
        <ul class="navigation__list-container" v-bind:class="{ open: isActive }">
            <li class="navigation__list-item" v-scroll-to="'#advantages'" @click="isActive = !isActive">ELŐNYÖK</li>
            <li class="navigation__list-item" v-scroll-to="'#interface'" @click="isActive = !isActive">GÉPI INTERFACE</li>
            <li class="navigation__list-item" v-scroll-to="'#system-operation'" @click="isActive = !isActive">A RENDSZER MŰKÖDÉSE</li>
            <li class="navigation__list-item" v-scroll-to="'#connect'" @click="isActive = !isActive">KAPCSOLAT</li>
        </ul>
        
        <div class="navigation__burger-menu" v-on:click="toggleBurgerMenu" v-bind:class="{ open: isActive }">
            <div class="burger-menu-icon"></div>
        </div>
    </section>

     <ContainerHeader class="navigation__header" ContainerHeaderTitle="e-Hivatali Kapu" ContainerHeaderParagraph="GYORS, PONTOS ÉS HITELES KAPCSOLATTARTÁS AZ ÜGYFELEKKEL" />
  </nav>
</template>

<script src="./Header.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './Header.scss';
</style>