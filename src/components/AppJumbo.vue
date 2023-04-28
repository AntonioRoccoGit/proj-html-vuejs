<script>
export default {
    name: "AppJumbo"
}
</script>

<template>
    <div class="jumbo d-flex">
        <h2>Commence Business</h2>
        <h3>Distant Mentoring Program</h3>
        <a href="#">Download free guidebook &rightarrow;</a>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.jumbo {
    padding: 9rem 0;
    margin: 0 auto;
    max-width: 1230px;
    background-image: url("../images/home-3-hero-bg.jpg");
    background-color: $my_input_bg_grey;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-weight: 400;
    }

    a {
        background-color: white;
        color: $my_font_green;
        padding: .2rem 1rem;
        border-radius: 6px;

        &:hover {
            background-color: $my_font_green;
            color: white;

        }
    }

}
</style>