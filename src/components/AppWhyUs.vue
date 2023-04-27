<script>
export default {
    name: "AppWhyUs",
}
</script>

<template>
    <div class="body">
        <div class="ms_container">
            <div class="container">
                <div class="row">
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
                    <div class="col-7">dsadsada</div>
                </div>
            </div>
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
    }
}
</style>