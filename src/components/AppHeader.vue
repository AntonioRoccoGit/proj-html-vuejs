<script>
export default {
    name: "AppHeader",
    props: {
        navLink: Object,
    }

}
</script>

<template>
    <header>
        <div class="ms_container d-flex justify-content-between align-items-center">
            <!-- NAV BAR -->
            <section class="nav-bar">
                <ul class="d-flex justify-content-between">
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
            </section>
            <!-- /NAV BAR -->
            <!-- LOGO -->
            <section class="logo">
                <h1>Max<span>Coach</span></h1>
            </section>
            <!-- /LOGO -->
            <!-- CALL TO ACTION -->
            <section class="call-to-action d-flex justify-content-end align-items-center">
                <i class="fa-solid fa-cart-shopping"><span>0</span></i>
                <i class="fa-regular fa-circle-user"></i>
                <input type="search" name="headere-search" id="headere-search">
            </section>
            <!-- /CALL TO ACTION -->

        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

header {
    height: $header_height;
    color: $my_font_blue;

    .ms_container {
        min-height: 100%;
        max-height: 100%;
        width: 80%;
        max-width: 1100px;
        margin: 0 auto;

        .nav-bar {
            width: 40%;

            ul {
                list-style-type: none;
            }
        }

        .logo {
            width: 20%;
            text-align: center;

            h1 {
                font-size: 1.2rem;
                font-weight: 800;

                span {
                    font-weight: 400;
                }
            }

        }

        .call-to-action {
            width: 40%;

            input {
                width: 50%;
            }
        }

    }
}
</style>