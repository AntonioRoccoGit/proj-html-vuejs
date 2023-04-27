<script>
export default {
    name: "AppMainSection"
}
</script>

<template>
    <section class="main">
        <div class="ms_container">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <div class="text-card">
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
                <section class="stats">

                </section>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.main {
    background-color: $my_input_bg_grey;
    padding-top: 6rem;
    padding-bottom: 4rem;


    .text-card {
        padding: .2rem .4rem;
        position: relative;

        h2 {
            text-transform: uppercase;
            font-size: .6rem;
            color: $main_section__card;

            span {
                font-weight: 800;
            }
        }

        h3 {
            font-size: 1.6rem;
            font-weight: 700;

            span {
                color: $my_font_green;
                font-weight: 400;
            }
        }

        p {
            font-size: .6rem;
        }

        .card-footer {
            font-size: .6rem;

            a {
                color: $my_font_green;
                padding-bottom: .1rem;
                border-bottom: 1px solid;
                font-weight: 600;
            }
        }

        .rounded-circle.ms_circle {
            position: absolute;
            top: -6px;
            right: 0;
        }
    }

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
        }
    }
}
</style>