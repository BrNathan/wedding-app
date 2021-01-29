<template>
  <div id="contact-page">
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <h1>Nous contacter</h1>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-container class="mb-3">
      <b-row>
        <b-col>
          <p>Voici les différents moyens pour nous contacter</p>
        </b-col>
      </b-row>
    </b-container> -->
    <b-container class="mb-5">
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="6" xl="6" class="mb-5 d-flex align-items-stretch"
          v-for="(item, index) in contactInformations"
          :key="'contact-' + index">
          <div class="bride-groom">
            <div class="img" :style="'background-image: url(' + item.imageUrl + ');'"></div>
            <div class="text mt-4 px-4">
              <h2 class="text-center">{{item.firstName}}</h2>
              <p><a :href="'tel:' + item.phoneNumber">{{item.phoneNumberDisplayed}}</a></p>
              <p><a :href="'mailto:' + item.email">{{item.email}}</a></p>
              <p>
                {{item.address.placeNumber}}<template v-if="item.address.placeNumberAdditionalInformation">{{item.address.placeNumberAdditionalInformation}}</template> {{item.address.streetName}}
                <br />
                {{item.address.postalCode}} {{item.address.city}}
              </p>
              <p><a target="_blank" :href="'https://m.me/' + item.facebookUsername">
                  <b-icon icon="facebook" aria-label="Facebook Messenger" /> Messenger</a></p>
              <p><a target="_blank" :href="'https://wa.me/' + item.whatsappPhoneNumber">
                  <b-icon icon="chat-quote" aria-label="WhatsApp Messenger" /> WhatsApp</a></p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AddressInformation } from '@/utils/types';

declare interface ContactInformation {
  firstName: string;
  lastName: string;
  phoneNumberDisplayed: string;
  phoneNumber: number;
  email: string;
  address: AddressInformation;
  imageUrl: string;
  facebookUsername: string;
  whatsappPhoneNumber: string;
};

@Component({
  components: {}
})
export default class ContactPage extends Vue {
  public contactInformations: ContactInformation[] = [
    {
      firstName: 'Amélie',
      lastName: 'André',
      email: 'andre.amelie.m@gmail.com',
      phoneNumberDisplayed: '06 82 91 41 54',
      phoneNumber: +33682914154,
      address: {
        placeNumber: 34,
        streetName: 'rue du capitaine Ballot',
        postalCode: 77670,
        city: 'Saint Mammès'
      },
      imageUrl: '/images/contactbride.jpg',
      facebookUsername: 'amelie.andre.18',
      whatsappPhoneNumber: '33682419154'
    },
    {
      firstName: 'Nathan',
      lastName: 'Bruet',
      email: 'nathan.bruet@gmail.com',
      phoneNumberDisplayed: '06 86 03 46 73',
      phoneNumber: +33686034673,
      address: {
        placeNumber: 34,
        streetName: 'rue du capitaine Ballot',
        postalCode: 77670,
        city: 'Saint Mammès'
      },
      imageUrl: '/images/contactgroom.jpg',
      facebookUsername: 'Nathan2402',
      whatsappPhoneNumber: '33686034673'
    }
  ];
}
</script>

<style lang="scss">
#contact-page {
  h1 {
    font-size: 4em !important;
    font-family: "Great Vibes", cursive !important;
    color: #f67e7d !important;
  }
}
</style>
