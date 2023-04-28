<script>
export default {
    name: "AppWhyUs",
    data() {
        return {
            currItem: 0,
            testimonialArray: [
                {
                    name: "madley pondor",
                    occupation: "IT Specialist",
                    img: "01.jpg",
                    title: "Professional team of specialists and passionate mentors at reach",
                    description: "I need to get a certification for English profiency and MaxCoach is my best choice. Their tutors are smart and professional whe dealing with students."
                },
                {
                    name: "mina hollace",
                    occupation: "Freelancer",
                    img: "02.jpg",
                    title: "A back-end Developer work to hard",
                    description: "I need to get a certification for CSS and JS and MaxCoach is my best choice."
                },
                {
                    name: "john dela vega",
                    occupation: "Boolean Teacher",
                    img: "03.jpg",
                    title: "The MaxCoach team works really hard to ensure high level of quality",
                    description: "I am happy with their arrangement of lessons and subjects. They have a great professionality and we all have time to laugh toghether."
                }
            ]
        }
    },
    methods: {
        getImgPath(imgName) {
            return new URL(`../images/testimonial-avata-${imgName}`, import.meta.url).href;
        },
        isActive(index) {
            if (index === this.currItem) {
                return true;
            }
            return false
        }
    }
}
</script>

<template>
    <div class="body">
        <div class="ms_container">
            <!-- TOP SIDE SECTION -->
            <div class="container">
                <div class="row">
                    <!-- left side -->
                    <div class="col-5">
                        <div class="text-heading">
                            <h2>testimonials</h2>
                            <h3>Why Do People <span>*Hearts*</span> Us?</h3>
                            <p>
                                Seeking for verbals of our service quality? Find them here. Everything is transparent and
                                straightforward for your sense of justification.
                            </p>
                            <span class="card-footer"><a href="#">View all &rightarrow;</a></span>
                        </div>
                    </div>
                    <!-- /left side -->

                    <!-- right side -->
                    <div class="col-7">
                        <div v-for="(item, index) in       testimonialArray      " :key="index"
                            class="testimonial-container" @click="currItem = index"
                            :class="{ 'is-active': isActive(index) }">
                            <section class="text">
                                <h2>{{ item.title }}</h2>
                                <p>
                                    {{ item.description }}
                                </p>
                            </section>
                            <section class="user-info d-flex">
                                <img class="rounded-circle" :src="getImgPath(item.img)" alt="">

                                <div class="user-txt">
                                    <h2>{{ item.name }}</h2>
                                    <span>/{{ item.occupation }}</span>
                                </div>
                            </section>
                        </div>
                    </div>
                    <!-- /right side -->

                </div>
            </div>
            <!-- /TOP SIDE SECTION -->

            <!-- BOTTOM SIDE SECTION -->
            <div class="container">
                <div class="row ms_row">
                    <div class="col-7">
                        <img class="square-pat" src="../images/maxcoach-shape-07.png" alt="">
                        <img class="pois-pat" src="../images/maxcoach-shape-05.png" alt="">
                        <img src="../images/home-3-team-image.png" alt="">
                    </div>
                    <div class="col-5">
                        <div class="text-heading">
                            <h2>everything in <span>maxcoach</span></h2>
                            <h3>We're Here To <span>Transform</span> You!</h3>
                            <p>
                                As learners, people can enjoy great companionship from MaxCoach mentors and educators. We
                                can help you develop and grow your best.
                            </p>
                            <span class="card-footer"><a href="#">Get Free Guide</a></span>
                            <div class="rounded-circle ms_circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /BOTTOM SIDE SECTION -->
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.body {
    &::before {
        display: block;
        width: 100%;
        height: 60px;
        content: "";
        border-radius: 0 0 120% 120%;
        background-color: $my_input_bg_grey;
    }

    .ms_container {
        padding-top: 3rem;
        padding-bottom: 4rem;

        .text-heading {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    div.col-7 {
        position: relative;
    }

    .testimonial-container {
        box-shadow: 10px 10px 56px -9px rgba(0, 0, 0, 0.75);
        background-color: white;
        border-radius: 6px;
        padding: 1rem;
        width: 80%;
        height: 180px;

        margin: 0 auto;
        opacity: .4;
        cursor: pointer;

        h2 {
            font-size: .9rem;
            font-weight: 600;
        }

        p {
            font-size: .8rem;

        }

        .user-info {

            img {
                width: 10%;
            }

            .user-txt {
                margin-left: .6rem;

                h2 {
                    text-transform: uppercase;
                    font-size: .5rem;
                    font-weight: 700;
                    margin-bottom: 0;
                }

                span {
                    font-size: .6rem;
                    font-weight: 500;
                }
            }
        }

        //handle hover
        &.is-active {
            position: absolute;
            opacity: initial;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.2);
            cursor: context-menu;
        }
    }

    .ms_row {
        padding-top: 4rem;
        padding-bottom: 3rem;

        .col-7 {
            .pois-pat {
                position: absolute;
                width: 100px;
                top: 100px;
                left: -50px;
            }

            .square-pat {
                width: 100px;
                position: absolute;
                bottom: -60px;
                right: 180px;
                z-index: -1;
            }

            img {
                width: 90%;
            }
        }

        .col-5 {
            .card-footer {
                background-color: $my_bg_green;
                padding: .3rem 1.2rem;
                border-radius: 4px;

                a {
                    color: white;
                    border: none;
                }


            }
        }
    }

}

.text-heading .rounded-circle.ms_circle {
    right: unset;
    left: 0;
}
</style>