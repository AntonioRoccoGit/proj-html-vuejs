<script>
import { store } from "../store";
export default {
    name: "Carousel",
    data() {
        return {
            store,
            currIndex: 0

        }
    },
    methods: {
        getImgPath(imgName) {
            return new URL(`../images/stock-full-hd-${imgName}`, import.meta.url).href;
        },
        showedCards(index) {
            let myArray = this.store.carouselImgArray.length;

            if (this.currIndex % myArray === index) {
                return true;
            };
            if ((this.currIndex + 1) % myArray === index) {
                return true;
            };
            if ((this.currIndex - 1) % myArray === index) {
                return true;
            };
            if ((this.currIndex - 1) % myArray === -1) {
                return (myArray - 1) === index;
            }
        },
        dotActive(i) {
            if (this.currIndex === i) {
                return true
            };
            return false
        }
    }
}
</script>

<template>
    <div class="ms_container">
        <div class="container">
            <div class="row row-cols-3 ">
                <div v-for="(card, index) in store.carouselImgArray" v-show="showedCards(index)" :key="index" class="col">
                    <div class="carousel-card">
                        <img :src="getImgPath(card.img)" alt="">
                        <section class="img-txt">
                            <h2 class="price">${{ card.price.toFixed(2) }}</h2>
                            <p class="description">{{ card.title }} {{ index }}</p>

                            <section class="details d-flex">
                                <div class="lessons">
                                    <a href="">
                                        <i class="fa-regular fa-file-lines"></i>
                                        <span>{{ card.lessons }} Lessons</span>
                                    </a>
                                </div>
                                <div class="students">
                                    <a href="">
                                        <i class="fa-regular fa-user"></i>
                                        <span>{{ card.students }} Students</span>
                                    </a>

                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
            <ul class="carousel-change d-flex mt-4">
                <li v-for="(number, index) in  5 " :key="index" @click="currIndex = index"
                    :class="{ 'active': dotActive(index) }"><i class="fa-solid fa-circle"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.col {
    height: 340px;
}

.carousel-card {
    border-radius: 12px;
    text-align: left;
    background-color: white;
    height: 100%;

    img {
        border-radius: 8px 8px 0 0;
    }

    .price {
        color: $my_font_green;
    }

    .img-txt {
        padding: 1rem .8rem;
        display: flex;
        flex-direction: column;

        .price {
            font-weight: 700;
            font-size: 1.5rem;
        }

        .description {
            font-weight: 700;

        }

        .details {
            font-size: .6rem;
            color: $my_font_blue;
            gap: 1rem;
        }

    }
}

.carousel-change {
    justify-content: center;
    gap: 1rem;
    font-size: .7rem;
    cursor: pointer;
    color: $input_placeholder_grey;

    li {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;

        &:hover {
            background-color: #ffffffc2;
        }

        &.active {
            color: black;
        }
    }


}
</style>