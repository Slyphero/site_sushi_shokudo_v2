<script setup lang="ts">

</script>

<template>
    <div class="page-container">
        <section>
            <h1 class="title">A propos de nous</h1>

            <h2 class="title">Introduction</h2>
            <p>
                Chez Sushi Shokudo, nous sommes fiers de vous offrir des sushis frais faits à la demande.
            </p>

            <p>
                Après des années à rêver d'ouvrir notre propre restaurant, nous avons décidé de nous lancer dans cette belle aventure.
            </p>

            <p>
                En tant que jeune établissement, chaque visite compte énormément pour nous. Nous serions ravis de vous accueillir et de partager notre passion avec vous. Venez écrire les premières pages de notre histoire avec nous !
            </p>

            <h2 class="title">Présentation de l'équipe</h2>

            <h3 class="title">Frédéric</h3>
            <p>
                Frédéric vous accueille en salle et s'engage à fournir un service de qualité le tout dans la bonne humeur.
            </p>

            <h3 class="title">Ly Sang</h3>
            <p>
                Ly Sang a une grande expérience de la restauration, notamment de sushis. Munie de ses 14 ans d'expérience, elle s'engage à vous confectionner des sushis frais sur demande avec des ingrédients de qualité.
            </p>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .page-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 3em;
        }

        h3 {
            font-size: 1.5em;
        }

        .title {
            @include property-color-opacity(color, $primary-color, 1);
            padding: 5px 0;
        }

        section {
            width: 50%;
        }

        p {
            font-size: 1.3em;
            margin: 10px 0;   
        }
    }
</style>