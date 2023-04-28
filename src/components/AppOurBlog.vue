<script>
import { store } from "../store";
export default {
    name: "AppOurBlog",
    data() {
        return {
            store
        }
    },
    methods: {
        getImgPath(imgName) {
            return new URL(`../images/artist-blog-${imgName}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="our-blogs">
        <div class="ms_container">
            <!-- TITLE -->
            <div class="text-heading">
                <h2>read for more joyment</h2>
                <h3>Latest From<span> Our Blogs</span></h3>
            </div>
            <!-- /TITLE -->

            <!-- IMAGE -->
            <ul class="mt-4 d-flex">
                <li v-for="user in store.ourBlogsImgArray" class="blogs-card">
                    <img :src="getImgPath(user.img)" alt="">
                    <section class="txt">
                        <span class="type">
                            {{ user.type }}
                        </span>
                        <h2>{{ user.title }}</h2>
                    </section>
                    <section class="details d-flex">
                        <div class="month">
                            <i class="fa-regular fa-calendar"></i>
                            <span>{{ user.date }}</span>
                        </div>
                        <div class="views">
                            <i class="fa-regular fa-eye"></i>
                            <span>{{ user.views }} views</span>
                        </div>
                    </section>
                </li>
            </ul>
            <!-- /IMAGE -->
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.our-blogs {
    background-color: $my_input_bg_grey;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 2rem;

    .blogs-card {
        width: calc(100% / 3);
        padding: 1rem .7rem;
        text-align: left;

        section.txt {
            padding-top: .4rem;

            .type {
                text-transform: uppercase;
                font-size: .8rem;
            }

            h2 {
                font-size: 1.2rem;
                font-weight: 700;
            }

        }

        .details {
            color: $main_section__card;
            font-size: .7rem;

            .views {
                margin-left: .5rem;
            }
        }
    }
}
</style>