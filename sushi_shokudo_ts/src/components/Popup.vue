<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

function closePopup() {
    emit('close');
}

</script>

<template>
    <div class="popup-overlay">
        <div class="popup-container">
            <div class="popup-content">
                <h1>Une boisson parmi : San Pellegrino, Evian, Coca-Cola ou 2 Ebi Fries offerts à l'achat d'un plateau ou d'une box.
                    Uniquement le soir du dimanche au jeudi.
                    Offre à durée limitée jusqu'au 28 février 2025 (inclus).
                </h1>
                <button @click="closePopup">Fermer</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.7);
    width: 100%;
    height: 100%;

    @include flex-direction-alignment(row, center, center);

    z-index: 1000;

    
    .popup-container {
        width: 60%;
        height: 70%;

        .popup-content {
            background-color: $background-color;
            border-radius: 5px;
            padding: 5%;

            h1 {
                font-size: 2em;
            }
                
            @include flex-direction-alignment(column, center, center);

            button {
                background-color: $primary-color;
                border-radius: 5px;
                border: none;
                padding: 10px;
                font-size: 1.5em;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .popup-overlay {
        .popup-container {
            width: 70%;
            .popup-content {
                h1 {
                    font-size: 1.5em;
                }
            }
        }
    }
}

</style>