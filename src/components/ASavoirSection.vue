<template>
  <section class="ftco-section bg-light" id="a-savoir-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">Bon à Savoir</span>
          <h2 class="mb-3">Bon à Savoir</h2>
        </div>
      </div>
      <b-row>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="mt-4"
          v-for="(item, index) in goodToKnowList"
          :key="'goodToKnow-' + index"
        >
          <b-card no-body class="overflow-hidden custom-card" style="border-radius: 0.5rem">
            <b-row no-gutters>
              <b-col cols="2" class="align-self-center icon-color">
                <font-awesome-icon
                  :icon="['fas', item.iconName]"
                  :size="item.iconSize + 'x'"
                  pull="right"
                />
              </b-col>
              <b-col cols="10">
                <b-card-body>
                  <b-card-title>
                    <h3 class="font-weight-bold">{{ item.title }}</h3>
                  </b-card-title>
                  <b-card-text>
                    {{ item.description }}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare interface GoodToKnow {
  title: string;
  description: string;
  iconName: string;
  iconSize: number;
}
@Component({
  components: {
  }
})
export default class ASavoirSection extends Vue {
  public goodToKnowList: GoodToKnow[] = [
    {
      title: 'Photographe',
      description: 'Une photographe professionelle sera présente le JOUR J pour immortaliser les plus beaux moments de notre mariage. On compte sur nos SUPERS invités pour respecter son travail.',
      iconName: 'camera',
      iconSize: 7
    },
    {
      title: 'Touche de rose',
      description: 'Pour faire un petit clin d\'oeil aux mariés, une touche de rose poudré dans votre tenue serait géniale !',
      iconName: 'tshirt',
      iconSize: 7
    },
    {
      title: 'Liste de mariage',
      description: 'Pour ceux qui se posent la question, il n\'y aura malheureusement pas de liste de mariage, mais un beau voyage de noces au pays des girafes et les lions est prévu.',
      iconName: 'gift',
      iconSize: 7
    }
  ]
}
</script>

<style lang="scss" scoped>
#a-savoir-section {
  .icon-color {
    color: #f6d1d8;
  }
  .custom-card {
    border-radius: 0.5rem;

    &:hover {
      box-shadow: 0 10px 16px rgba(0,0,0,.2);
    }
  }
}
</style>
