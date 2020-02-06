<template>
  <div class="error-page">
      <div class="error-page__info">
        <div class="error-page__info__image">
          <v-avatar
            size="124"
            tile>
            <v-img src="../assets/chefHat.png" contain></v-img>
        </v-avatar>
        </div>
        <div class="error-page__info__description">
          <div class="error-page__info__description__title">¡Oh, no! </div>
          <div class="error-page__info__description__subtitle"> Esta página no existe </div>
          <div class="error-page__info__descripion__actions">
            <v-btn
              to='/'
              dark
              color="primary">
                Volver a página de inicio
            </v-btn>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'ErrorPage'
}
</script>
<style scoped>
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .error-page__info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .error-page__info__image {
     margin-right: 20px;
  }
  .error-page__info__description__title {
    font-size: 2em;
  }
  .error-page__info__description__subtitle {
    font-size: 1em;
  }
  .error-page__info__descripion__actions {
     margin-top: 20px;
  }
  @media (min-width: 600px) {
    .error-page__info__description__title {
      font-size: 3em;
    }
    .error-page__info__description__subtitle {
      font-size: 2em;
    }
  }
  @media (min-width: 900px) {
    .error-page__info__description__title {
      font-size: 4em;
    }
    .error-page__info__description__subtitle {
      font-size: 3em;
    }
  }
</style>
