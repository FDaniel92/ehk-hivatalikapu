<template>
    <section class="text-container">
        <h2>
            Mi az a JBK?
        </h2>
        <hr>
        <div class="row">
            <div class="text-container__left-txt">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus lobortis, lobortis magna in, venenatis nulla. Cras non ultrices turpis, et pulvinar mauris. Phasellus imperdiet dui in diam imperdiet scelerisque.
                    <br>
                    <br>
                    Mauris et varius justo. Nulla interdum auctor aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus quis leo vel justo gravida molestie vitae nec tortor. Nulla mollis sed tortor sed mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacinia vulputate tortor in luctus.
                    <br>
                    <br>
                    Morbi lacinia malesuada diam. Fusce aliquam metus at diam rhoncus, et pretium massa congue. Aliquam vulputate ligula auctor fermentum congue. Pellentesque risus magna, molestie sit amet justo ac, interdum aliquet justo. Ut pellentesque a tellus sed egestas. Praesent odio ligula, volutpat eget nisl ut, auctor interdum sapien.
                </p>
            </div>
            <div class="column">
                <p>Iktatás</p>
                <p>Iktatás</p>
                <p>Iktatás</p>
                <p>Iktatás</p>
                <p>Iktatás</p>
                <p>Iktatás</p>
                <p>Iktatás</p>
            </div>
        </div>
    </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/assets/styles/template/variables/_variables.scss";
   .text-container {
       width: 1200px;
       margin: 0 auto 50px auto;
       h2 {
           font-size: $md-font-size;
       }
       hr {
           width: 40px;
           height: 4px;
           background: $color-2;
           margin: 20px 0;
       }
       &__left-txt {
           width: 100%;
           max-width: 800px;
           margin-right: auto;
       }
   }
</style>