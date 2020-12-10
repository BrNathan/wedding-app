<template>
  <div id="sleeping-location-page">
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <h1>Où dormir ?</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <p>Voici une liste non exhaustive de différents lieux où dormir, proches de la cérémonie</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-5">
      <b-row>
        <b-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="4"
          v-for="(item, index) in userSleepingLocation"
          :key="'location-' + index"
          class="mb-5"
        >
          <b-card no-body class="h-100">
            <b-card-img-lazy
              offset="10"
              :src="item.imageSourceLink"
              :alt="item.title"
              top
            />
            <b-card-body>
              <b-card-title>{{ item.title }}</b-card-title>
              <b-card-text class="text-justify">
                {{ item.description }}
              </b-card-text>
              <b-card-text
                >{{ item.distance }} - {{ item.travelTime }}min</b-card-text
              >

            </b-card-body>
            <template #footer v-if="item.googleMapsLink">
              <template v-if="item.googleMapsLink">
                <b-link :href="item.googleMapsLink" target="_blank">
                  <b-button variant="primary">
                    Voir sur Maps <b-icon icon="geo-alt" aria-hidden="true" />
                  </b-button>
                </b-link>
              </template>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';
import { IsNullOrUndefined } from '@/utils/extensions';

declare interface SleepingLocation {
  title: string;
  description: string;
  distance: string;
  travelTime: number;
  googleMapsLink?: string;
  imageSourceLink: string;
  onlyViewBy?: string[];
};

@Component({
  components: {}
})
export default class SleepingLocationPage extends Vue {
  public sleepingLocationInternal: SleepingLocation[] = [
    {
      title: 'B&B Hotel McArthurGlen',
      description: 'L\'hôtel B&B se situe en face des magasins d\'usine McArthurGlen Troyes, parfait pour trouver une belle tenue pour le mariage !',
      distance: '11km',
      travelTime: 12,
      googleMapsLink: 'https://goo.gl/maps/jYxxb34Uj6Yc1Hsz8',
      imageSourceLink: '/images/sleeping-location/BBHotel.jpg'
    },
    {
      title: 'Golden Tulip Troyes',
      description: 'L\'hôtel Golden Tulip Troyes se situe proche de la zone commercial de Barberey',
      distance: '12km',
      travelTime: 13,
      googleMapsLink: 'https://goo.gl/maps/R3SdJ6uidsYXxwad7',
      imageSourceLink: '/images/sleeping-location/GoldenTulip.jpg'
    },
    {
      title: 'En tente',
      description: 'Vous pouvez planter votre tente juste à côté du lieu de la cérémonie, pratique pour profiter de la soirée jusqu\'au bout',
      distance: '100m',
      travelTime: 1,
      imageSourceLink: '/images/sleeping-location/Tente.jpg',
      onlyViewBy: ['REP']
    },
    {
      title: 'Brit Hotel Essential',
      description: 'L\'hôtel Brit Essential Troyes se situe proche de la zone commercial de Barberey',
      distance: '13km',
      travelTime: 13,
      imageSourceLink: '/images/sleeping-location/BritHotel.jpg',
      googleMapsLink: 'https://goo.gl/maps/ntntxZBCu6fnfqpa9'
    },
    {
      title: 'Dans la salle',
      description: 'Il sera possible de rester dormir dans la salle de réception, pratique pour profiter de la soirée jusqu\'au bout.',
      distance: '10m',
      travelTime: 1,
      imageSourceLink: '/images/sleeping-location/MatelasSalle.jpg',
      onlyViewBy: ['REP']
    }
  ];

  public get userSleepingLocation(): SleepingLocation[] {
    const userInvitation: string[] = authenticationStore?.tokenData?.userInvitations ?? [];

    return this.sleepingLocationInternal.filter(l => IsNullOrUndefined(l.onlyViewBy) || l.onlyViewBy?.some(o => userInvitation.includes(o)));
  }
}
</script>

<style lang="scss">
#sleeping-location-page {
  h1 {
    font-size: 4em !important;
    font-family: "Great Vibes", cursive !important;
    color: #f67e7d !important;
  }
  .card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
    min-height: 200px;
  }
}
</style>
