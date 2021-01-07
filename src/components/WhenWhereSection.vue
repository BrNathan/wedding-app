<template>
  <section class="ftco-section bg-light" id="when-where-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">Horaires</span>
          <h2 class="mb-3">Horaires</h2>
        </div>
      </div>
      <b-row align-h="center">
        <b-col
          cols="12"
          sm="12"
          md="6"
          lg="3"
          xl="3"
          class="mb-3"
          v-for="(item, index) in userInvitedPlaces"
          :key="'invitation-' + index">
          <div
            class="place img h-100"
            :style="'background-image: url(' + item.imageSourceLink + ');'"
          >
            <div class="text text-center h-100 d-flex flex-column">
              <h3 class="mb-auto">{{item.title}}</h3>
              <p>
                <span>{{displayPlaceDate(item.beginningDate)}}</span>
                <br />
                <span>à <strong>{{displayPlaceTime(item.beginningDate)}}</strong></span>
              </p>
              <p>
                <span>
                  <template v-if="item.address.placeNumber !== undefined">{{item.address.placeNumber}} </template>{{item.address.streetName}}
                  <br />{{item.address.postalCode}} {{item.address.city}}
                </span>
              </p>
              <p><a target="_blank" :href="item.googleMapsLink" class="btn-custom">Voir le lieu</a></p>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';
import { IsNullOrUndefined } from '@/utils/extensions';
import { AddressInformation } from '@/utils/types';

declare interface Place {
  title: string;
  imageSourceLink: string;
  onlyViewBy?: string[];
  beginningDate: Date;
  address: AddressInformation;
  googleMapsLink: string;
}
@Component({
  components: {
  }
})
export default class WhenWhereSection extends Vue {
  public placesInternal: Place[] = [{
    title: 'Mariage Civil',
    imageSourceLink: '/images/place-1.jpg',
    beginningDate: new Date(2021, 7, 21, 15, 30),
    address: {
      placeNumber: 90,
      streetName: 'rue du Général de Gaulle',
      postalCode: 10600,
      city: 'Mergey'
    },
    onlyViewBy: ['MAI'],
    googleMapsLink: 'https://goo.gl/maps/NfTU1FtggJVtS7ac8'
  }, {
    title: 'Cérémonie laïque',
    imageSourceLink: '/images/place-2.jpg',
    beginningDate: new Date(2021, 7, 21, 16, 30),
    address: {
      streetName: 'Le Clos Belair',
      postalCode: 10180,
      city: 'Saint-Benoît-sur-Seine'
    },
    onlyViewBy: ['CER'],
    googleMapsLink: 'https://goo.gl/maps/3qHvNVQhKJweCxb56'
  }, {
    title: 'Le vin d\'honneur',
    imageSourceLink: '/images/place-3.jpg',
    beginningDate: new Date(2021, 7, 21, 17, 30),
    address: {
      streetName: 'Le Clos Belair',
      postalCode: 10180,
      city: 'Saint-Benoît-sur-Seine'
    },
    onlyViewBy: ['CER'],
    googleMapsLink: 'https://goo.gl/maps/3qHvNVQhKJweCxb56'
  }, {
    title: 'Le Diner',
    imageSourceLink: '/images/place-3.jpg',
    beginningDate: new Date(2021, 7, 21, 20, 0),
    address: {
      streetName: 'Le Clos Belair',
      postalCode: 10180,
      city: 'Saint-Benoît-sur-Seine'
    },
    onlyViewBy: ['REP'],
    googleMapsLink: 'https://goo.gl/maps/3qHvNVQhKJweCxb56'
  }
  ];

  public get userInvitedPlaces(): Place[] {
    const userInvitation: string[] = authenticationStore?.tokenData?.userInvitations ?? [];

    return this.placesInternal.filter(l => IsNullOrUndefined(l.onlyViewBy) || l.onlyViewBy?.some(o => userInvitation.includes(o)));
  }

  public displayPlaceDate(date: Date): string {
    return date.toLocaleString('fr-FR', { weekday: 'long' }) + ' ' + date.getDate() + ' ' + date.toLocaleString('fr-FR', { month: 'long' });
  }

  public displayPlaceTime(date: Date): string {
    return date.getHours() + 'h' + (date.getMinutes().toString().length === 1 ? '0' : '') + date.getMinutes();
  }
}
</script>

<style lang="scss" scoped>
</style>
