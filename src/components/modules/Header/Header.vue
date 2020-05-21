<template>
  <nav class="navigation">
    <section class="navigation__container">
        <img src="@/assets/images/EHK_logo.svg" alt="EHK logó" class="navigation__logo" />
        <ul class="navigation__list-container" v-bind:class="{ open: isActive }">
            <li class="navigation__list-item">JBK</li>
            <li class="navigation__list-item">A rendszer előnyei</li>
            <li class="navigation__list-item">Modulok</li>
            <li class="navigation__list-item">Kapcsolat</li>
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

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleBurgerMenu: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/assets/styles/template/variables/_variables.scss";
    .navigation {
        width: 100%;
        height: 680px;
        position: relative;
        background: red;

        @media (min-width: $lg-devices) {
            background: url("~@/assets/images/header-bg.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        &__burger-menu {
            width: 40px;
            height: auto;
            background: yellow;
            position: relative;
            z-index: 11;

            &.open {
                .burger-menu-icon {
                    transition-duration: 0.1s;
                    transition-delay: 0.5s;
                    background: transparent;

                    &:after {
                        transition: top 0.4s, transform 0.5s 0.5s;
                        top: 0px;
                        transform: rotateZ(45deg);
                    }

                    &:before {
                        transition: top 0.5s, transform 0.5s 0.5s;
                        top: 0px;
                        transform: rotateZ(-45deg);
                    }
                }
            }

            .burger-menu-icon {
                height: 3px;
                width: 40px;
                top: 20px;
                background-color: white;
                border-radius: 20px;
                position: absolute;
                transition-duration: 0.5s;
                transition-delay: 0.5s;
                &:before{
                    left: 0;
                    position: absolute;
                    top: -20px;
                    height: 3px;
                    width: 40px;
                    background-color: white;
                    content: "";
                    transition-duration: 0.5s;
                    transition: transform 0.5s, top 0.5s 0.5s;
                }
                &:after{
                    left: 0;
                    position: absolute;
                    top: 20px;
                    height: 3px;
                    width: 40px;
                    background-color: white;
                    content: "";
                    transition-duration: 0.5s;
                    transition: transform 0.5s, top 0.5s 0.5s;
                }
            }
            // span {
            //     position: absolute;
            //     width: 40px;
            //     height: 3px;
            //     background: $color-2;
            //     transition: 0.3s ease-in-out;

            //     &:first-child {
            //         top: 10px;
            //         transition: transform 0.5s 0.5s, top 0.5s;
            //         &.closed {
            //             top: 20px;
            //             transform: rotate(-45deg);
            //         }
            //     }
            //     &:nth-child(2) {
            //         top: 20px;
            //         opacity: 1;
            //         &.closed {opacity: 0;}
            //     }
            //     &:nth-child(3) {
            //         top: 30px;
            //          transition: transform 0.5s 0.5s, top 0.5s;
            //          &.closed {
            //             top: 20px;
            //             transform: rotate(45deg);
            //         }
            //     }
            // }
        }

        &__main-title {
            color: $color-1;
            text-align: center;
            padding-top: 60px;

            h1 {
                font-size: $md-font-size;

                @media (min-width: $lg-devices) {
                    font-size: $lg-font-size;
                }
            }

            hr {
                width: 80px;
                height: 3px;
                background: $color-2;
                margin: 30px auto;
            }

            p {
                text-transform: uppercase;
                font-size: $sm-font-size;
                width: 100%;
                max-width: 900px;
                margin: 0 auto;

                @media (min-width: $lg-devices) {
                    font-size: $md-font-size;
                }
            }
        }

        &__container {
            display: flex;
            flex-direction: row;
            padding: 25px 20px;

            @media (min-width: $lg-devices) {
                align-items: center;
            }
        }

        &__logo {
           display: flex;
            flex-direction: row;
            width: 100px;
            height: 43px;
            margin-right: auto;
            z-index: 11;
        }

        &__list-container {
            flex-direction: column;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            height: 0%;
            overflow: hidden;
            padding: 0;
            margin: 0;
            background: black;
            transition: 1s ease-in-out;
            z-index: 10;

            &.open {
                height: 100%;
            }

            @media (min-width: $lg-devices) {
                display: flex;
                flex-direction: row;
                position: relative;
                top: 0;
                height: auto;
                left: auto;
                width: auto;
                background: none;
            }
    
        }

        &__list-item {
            color: $color-1;
            margin-bottom: 30px;
            text-transform: uppercase;
            cursor: pointer;

            @media (min-width: $lg-devices) {
                margin: 0 20px 0 0;
            }
        }
    }
</style>