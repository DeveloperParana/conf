<template>
  <div class="tickets">
    <div class="size margin content" id="tickets">
      <div class="container align-center">
        <div class="box-title text-align-center">
          <h2>Ingressos</h2>
        </div>
      </div>

      <div class="content center" id="kids">
        <a
          href="https://www.sympla.com.br/devparana-conference-2019__520952"
          target="_blank"
        >
          <img
            alt="DevParaná kids"
            class="kids-img"
            v-bind:src="require(`@/assets/images/kids.png`)"
          />
        </a>
      </div>

      <div class="container wrap">
        <div
          class="tickets--item col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4"
          :class="{
            'ticket-soldout': ticket.soldout,
            ['ticket-' + ticket.id]: ticket.id,
          }"
          v-for="ticket in tickets"
          :key="ticket.id"
        >
          <div
            class="tickets--item--content container column"
            :class="{
              active: currentticket === ticket.id,
              soldout: ticket.soldout,
            }"
            v-on:mouseover="currentticket = ticket.id"
          >
            <div class="tickets-border">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="soldout-span" v-if="ticket.soldout && ticket.available">
              <div class="span">ESGOTADO</div>
            </div>

            <div class="soldout-span" v-if="!ticket.available">
              <div class="span">EM BREVE</div>
            </div>

            <div class="tickets-title text-align-center">
              {{ ticket.title }}
            </div>

            <div class="tickets-text">
              <div class="tickets-text-event">
                <div>Dev</div>
                <div>Paraná</div>
                <div>Conf 2020</div>
              </div>
              <div class="tickets-text-date">
                <div class="tickets-span">Data</div>
                {{ ticket.date }}
              </div>
              <div class="tickets-text-value">
                <div class="tickets-span">Valor</div>
                <span class="span-value">{{ "R$" + ticket.value }}</span>
              </div>
              <div class="tickets-btn">
                <a
                  target="_blank"
                  :href="ticket.link"
                  class="btn btn-primary btn-full"
                  :disabled="ticket.soldout || !ticket.available"
                  >Comprar tickets</a
                >
              </div>
            </div>

            <div class="tickets-border tickets-border-bottom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <!--
    <div class="shop container align-items-center justify-content-between wrap">
      <div class="shop--info flex-basis-500 flex-grow-1">
        <div class>
          <h3>
            <span>SOBRE O</span>
            <span>DEVPARANÁ</span>
            <span>CONFERENCE 2020</span>
          </h3>
          <p>
            <strong>O DevParaná pensando em trazer relevância de conteúdo aos desenvolvedores do nosso estado organiza o DevParaná Conference.</strong>
          </p>
          <p>
            <strong>A conferência tem por objetivo trazer palestrantes que são referência nacional em sua área de atuação, assim como palestrantes que são destaque na comunidade através de uma chamada para submissão de palestras.</strong>
          </p>
          <p>No total serão 8 talks, 4 de convidados e 4 de pessoas da comunidade.</p>
        </div>
      </div>

      <div class="shop--image flex-basis-400 flex-grow-1 container align-center">
        <img src="~/assets/images/t-shirt-blue.jpg" width="100%" alt="Camiseta DevParaná 2018">
      </div>
      </div>-->
      <form id="form-camiseta">
        <input type="hidden" name="iot" value="button" />
        <input type="hidden" name="code" :value="tshirtSize" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      currentticket: 0,
      tshirtSize: "6C0760762727348CC4D39F8A7A077AB6",
    };
  },
  computed: {
    ...mapState(["tickets"]),
  },
  methods: {
    tshirtSelectionValidation() {
      PagSeguroLightbox(document.querySelector("#form-camiseta"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/tickets.scss";
</style>

