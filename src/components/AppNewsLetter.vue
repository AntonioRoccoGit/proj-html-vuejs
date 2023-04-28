<script>
export default {
    name: "AppNewsLetter"
}
</script>

<template>
    <div class="newsletter">
        <div class="ms_container">

            <div class="text-heading">
                <h3>Subscribe<span> Newsletter</span></h3>
                <p>Enter your email address to register our newsletter subscription delivered on a regular basis</p>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/constant.scss" as *;

.text-heading {
    text-align: center;

    p {
        color: $main_section__card;
    }
}

.newsletter {
    padding: 1.5rem;

    .ms_container {
        max-width: 400px;
    }
}
</style>