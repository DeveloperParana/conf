<template lang="html">
  <div class="content size margin">
      <div class="buy-tickets box-title">
        <div class="buy-tickets--text text-align-left">
          <h3>Comprar Ticket</h3>
        </div>
        <div class="buy-tickets--button">
          <a target="_blank" href="" class="btn btn-lg btn-primary"><i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #fff;
}

.buy-tickets {
  margin: 0 auto;
  border: 5px solid $color-1;
  padding: 40px;
  box-sizing: border-box;
  // border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  .btn {
    background: $color-1;
  }
  &:hover {
    background: $color-1;
    .btn {
      background: $color-2;
    }
  }
}

.buy-tickets--button {
  transition: 0.3s;
  text-align: center;
  position: absolute;
  right: 70px;
  bottom: -35px;
}
</style>
