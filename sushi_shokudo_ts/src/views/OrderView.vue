<script setup lang="ts">

</script>

<template>
<div class="order-container">
    <section>
        <h1>Pour commander (livraison / à emporter)</h1>
        <div class="order-buttons-container">
            <a href="https://www.ubereats.com/fr/store/sushi-shokudo/nAaJVHvcWCe88ZtaBJGXhA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwU2hva3VkbyUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpsd1JaV3lMcjlFY1JZNXhVQ2hObHpUQSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0NS43NjM1MDI1JTJDJTIybG9uZ2l0dWRlJTIyJTNBNC44NTE5Mjk0JTdE" target="_blank">
                <button class="primary-button order-link">
                    Uber Eats
                </button>
            </a>
            <a href="https://menu.lyoneats.fr/menu/items/sushi_shokudo" target="_blank">
                <button class="secondary-button order-link">
                    Lyon Eats
                </button>
            </a>
        </div>
    </section>
</div>
</template>

<style scoped lang="scss">
.order-container {
    @include flex-direction-alignment(column, center, center);

    section {
        width: 50%;
        text-align: center;

        h1 {
            color: $primary-color;
            font-size: 3em;
        }
    }

    .order-buttons-container {
        @include flex-direction-alignment(row, center, center);
        min-height: 60vh;

        a {
            .order-link {
                text-decoration: none;
                font-size: 24px;
                padding: 20px;
                border-radius: 5px;
            }

            .order-link:hover {
                @include property-color-opacity(
                    background-color, $background-color, 1
                );
				@include property-color-opacity(color, $text-color, 1);
				transition: 0.2s ease-in-out;
            }

            .primary-button {
					@include property-color-opacity(color, white, 1);
					@include property-color-opacity(background-color, $primary-color, 1);
            }

            .secondary-button {
                @include property-color-opacity(
                    background-color, $secondary-color, 1
                );
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .order-container {
        section {
            width: 90%;
        }

        .order-buttons-container {
            flex-direction: column;
        }
    }
}
</style>