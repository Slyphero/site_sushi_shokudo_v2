<script setup lang="ts">

</script>

<template>
    <div class="order-container">
        <h1>Pour commander (livraison / à emporter)</h1>
        <div class="order-buttons-container">
            <a href="#" tareget="_blank">
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
    </div>
    
</template>

<style scoped lang="scss">
    .order-buttons-container {
        @include flex-direction-alignment(row, center, center);
        min-height: 90vh;
        a {
            .order-link {
                text-decoration: none;
                font-size: 24px;
                padding: 20px;
                border-radius: 5px;
            }

            .order-link:hover {
                @include property-color-opacity(background-color, $background-color, 1);
					@include property-color-opacity(color, $text-color, 1);
					transition: 0.2s ease-in-out;
            }

            .primary-button {
					@include property-color-opacity(color, white, 1);
					@include property-color-opacity(background-color, $primary-color, 1);
            }

            .secondary-button {
                @include property-color-opacity(background-color, $secondary-color, 1);
            }
        }
    }
</style>