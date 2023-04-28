<script>
export default {
    name: "AppFooter",
    props: {
        navFooter: Object
    },
    computed: {
        navAdress() {
            return this.navFooter[0];
        },
        navExplore() {
            return this.navFooter[1];
        },
        navInformation() {
            return this.navFooter[2];
        }
    }
}
</script>

<template>
    <div class="footer">
        <div class="ms_container">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2 class="footer-header">
                            {{ navAdress.name }}
                        </h2>
                        <ul class="footer-ul">
                            <li class="footer-txt"><a href="">{{ navAdress.address }}</a></li>
                            <li class="footer-txt"><a href="">{{ navAdress.number }}</a></li>
                            <li class="footer-txt"><a href="">{{ navAdress.mail }}</a></li>
                        </ul>
                        <ul class="icon d-flex">
                            <li><a href=""><i class="fa-brands fa-square-facebook"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <h2 class="footer-header">
                                        {{ navExplore.name }}
                                    </h2>
                                    <ul class="footer-ul">
                                        <li v-for="link in (navExplore.link)" class="footer-txt">
                                            <a href="">{{ link }}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <h2 class="footer-header">
                                        {{ navInformation.name }}
                                    </h2>
                                    <ul class="footer-ul">
                                        <li v-for="link in (navInformation.link)" class="footer-txt">
                                            <a href="">{{ link }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="copyright">©2020 Maxcoach. All Rights Reserved</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.footer {
    background-color: $my_footer_bg_color;
    color: white;
    padding-top: 4rem;
    padding-bottom: 3rem;

    .footer-header {
        font-size: 1rem;
        cursor: context-menu;
    }

    .footer-ul {
        font-size: .6rem;
        font-weight: 600;
        color: $input_placeholder_grey;

        li {
            padding: .5rem 0;

            a:hover {
                color: rgba(255, 255, 255, 0.329);
            }
        }
    }

    ul.icon {
        color: $input_placeholder_grey;
        gap: 20px;

        a:hover {
            color: rgba(255, 255, 255, 0.329);

        }
    }

    .copyright {
        color: $input_placeholder_grey;
        text-align: center;
        margin-top: 6rem;
        font-size: .7rem;

    }
}
</style>