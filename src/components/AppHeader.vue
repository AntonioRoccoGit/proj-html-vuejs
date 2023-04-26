<script>
export default {
    name: "AppHeader",
    props: {
        navLink: Object,
    },
    data() {
        return {
            toggleDropdown: false
        }
    },

}
</script>

<template>
    <header>
        <div class="ms_container d-flex justify-content-between align-items-center">
            <!-- NAV BAR -->
            <section class="nav-bar">
                <ul class=" d-flex justify-content-start">
                    <li @click="toggleDropdown = !toggleDropdown" v-for="(item, key) in navLink">
                        <a :href="`#${key}`">{{ key }}</a>
                        <ul v-show="toggleDropdown" class="menu-dropdown">
                            <li v-for="elem in item"><a href="">{{ elem }}</a></li>
                        </ul>
                    </li>
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
                <div class="input d-flex align-items-center">
                    <input placeholder="Search... " type="search" name="header-search" id="header-search">
                    <label for="header-search"></label>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
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
                a {
                    color: inherit;
                    text-decoration: none;
                }

                list-style-type: none;

                &.menu-dropdown {
                    font-size: .6rem;
                }
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

            .input {
                background-color: $my_input_bg_grey;
                border-radius: 6px;
                font-size: .8rem;
                padding: .25rem .2rem;

                i {
                    color: $input_placeholder_grey;
                }

                input {
                    border: none;
                    width: 80%;
                    background-color: $my_input_bg_grey;
                    border-radius: 8px 0 0 8px;

                    &:focus-visible {
                        outline: none;
                    }

                }

            }
        }

    }
}
</style>