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
                    <li class="nav-links" @click="toggleDropdown = !toggleDropdown" v-for="(item, key) in navLink">
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
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;

        .nav-bar {
            width: 40%;

            ul {

                li {
                    position: relative;

                    &.nav-links {
                        font-size: .8rem;

                        &>a::after {
                            content: "\f078";
                            font-family: "Font Awesome 5 Free";
                            font-weight: 900;
                            font-size: .6rem;
                            margin-left: .1rem;
                        }
                    }

                    &.nav-links:not(:first-child) {
                        padding-left: .6rem;
                    }
                }


                a {
                    color: inherit;
                    text-decoration: none;
                    font-weight: 500;


                }

                list-style-type: none;

                &.menu-dropdown {
                    font-size: .45rem;
                    position: absolute;
                }
            }
        }

        .logo {
            width: 20%;
            text-align: center;

            h1 {
                font-size: 1.2rem;
                font-weight: 800;
                margin: 0;

                span {
                    font-weight: 400;
                }
            }

        }

        .call-to-action {
            width: 40%;

            i.fa-cart-shopping {
                position: relative;
                margin-right: 1rem;

                span {
                    position: absolute;
                    font-size: .4rem;
                    border-radius: 50%;
                    bottom: 14px;
                    left: 12px;
                    background-color: $my_bg_green;
                    color: white;
                    height: 12px;
                    width: 12px;
                    line-height: 12px;
                    text-align: center;

                }
            }

            .input {
                background-color: $my_input_bg_grey;
                border-radius: 6px;
                font-size: .8rem;
                padding: .25rem .2rem;
                margin-left: .3rem;

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

// PSEUDO ELEMS
.icon::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
</style>