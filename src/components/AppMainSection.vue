<script>
export default {
    name: "AppMainSection"
}
</script>

<template>
    <section class="main">
        <div class="ms_container">
            <div class="container">
                <!-- IMG AND TXT TOP SIDE -->
                <div class="row">
                    <div class="col-5">
                        <div class="text-heading">
                            <h2>everything in <span>maxcoach</span></h2>
                            <h3>Learn about our <span>Work Culture</span> at MaxCoach</h3>
                            <p>
                                Spend some time to visit our website or head office and discover our current courses,
                                enrollment procedure, and registration deadline. We're opening new classes every beginning
                                of each month.
                            </p>
                            <span class="card-footer">Have questions? <a href="#">Get free Guide &rightarrow;</a></span>
                            <div class="rounded-circle ms_circle"></div>
                        </div>

                    </div>
                    <div class="col-7">
                        <div class="card-img">
                            <img class="main-img"
                                src="../images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="">
                            <img class="corner-img rounded-2"
                                src="../images/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="">
                            <img class="corner-bg" src="../images/maxcoach-shape-07-100x100.png" alt="">


                        </div>
                    </div>
                </div>
                <!-- /IMG AND TXT TOP SIDE -->

                <!-- STATS -->
                <section class="stats">
                    <ul>
                        <li>
                            <h2>129+</h2>
                            <span>enrolled learners</span>
                        </li>
                        <li>
                            <h2>80</h2>
                            <span>finished sessions</span>
                        </li>
                        <li>
                            <h2>4%</h2>
                            <span>sastification rate</span>
                        </li>
                    </ul>
                    <img src="../images/maxcoach-shape-02.png" alt="">
                </section>
                <!-- /STATS -->

                <!-- IMG AND TXT BOTTOM SIDE -->
                <div class="row">
                    <div class="col-7">
                        <div class="card-img">
                            <img class="main-img" src="../images/stock-full-hd-11-670x450.jpg" alt="">
                            <img class="corner-bg bottom" src="../images/maxcoach-shape-07-100x100.png" alt="">
                            <img class="bg-pattern" src="../images/maxcoach-shape-05.png" alt="">

                            <!-- you tube overlay -->
                            <div class="you-tube-overlay">
                                <img class="you-tube-icon" src="../images/icon-youtube-play.png" alt="">
                            </div>
                            <!-- /you tube overlay -->

                        </div>
                    </div>
                    <div class="col-5">
                        <div class="text-heading">
                            <h2>how we work</h2>
                            <h3>Upgrade Your Skills<span>Upgrade Your Life</span></h3>
                            <p>
                                Opening up more opportunities in front of you to get the ticket to more enjoyable door in
                                life. Getting equipped with new skills for new sets of insights into your career. MaxCoach
                                accompany learners in every stage of learning.
                            </p>
                            <span class="card-footer"><a href="#">Download free guidebook &rightarrow;</a></span>
                            <div class="rounded-circle ms_circle"></div>
                        </div>

                    </div>
                </div>
                <!-- /IMG AND TXT BOTTOM SIDE -->

                <!-- CAROUSEL -->
                <section class="carousel">
                    <!-- header -->
                    <div class="text-heading">
                        <h2>join maxcoach at beast</h2>
                        <h3>Latest Online <span>Courses</span></h3>
                    </div>
                    <!-- /header -->
                    <div class="container">
                        <div class="row row-cols-3">
                            <div class="col">cccc</div>
                            <div class="col">ccccc</div>
                            <div class="col">ccccc</div>
                        </div>
                    </div>

                </section>
                <!-- /CAROUSEL -->
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.main {
    background-color: $my_input_bg_grey;
    padding-top: 6rem;

    // CARD TEXT SIDE


    // CARD IMG SIDE
    .card-img {
        position: relative;

        .main-img {
            position: relative;
            z-index: 2;
        }

        .corner-img {
            position: absolute;
            width: 80px;
            top: -40px;
            right: -40px;
            z-index: 2;
        }

        .corner-bg {
            position: absolute;
            width: 80px;
            top: -30px;
            right: 0;

            &.bottom {
                top: unset;
                bottom: -40px;
                right: -20px;
            }
        }

        .bg-pattern {
            position: absolute;
            width: 100px;
            top: 10px;
            left: -50px;
        }

        .you-tube-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;

            .you-tube-icon {
                width: 36px;
                cursor: pointer;
            }

        }

    }

    // STATS
    .stats {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 4rem;
        position: relative;

        ul {
            display: flex;
            justify-content: space-around;

            h2 {
                font-weight: 700;
                margin-bottom: 0;
                color: $my_font_green;
            }

            span {
                color: $main_section__card;
                text-transform: uppercase;
                font-size: .7rem;
                font-weight: 600;
            }
        }

        img {
            position: absolute;
            width: 60px;
            top: -10px;
            right: 0;
        }
    }

    .carousel {
        text-align: center;
        padding-top: 4rem;
    }

    // BOTTOM WAVE
    // &::after {
    //     display: block;
    //     width: 100%;
    //     height: 60px;
    //     content: "";
    //     border-radius: 0 0 150% 150%;
    //     background-color: white;
    // }

}
</style>