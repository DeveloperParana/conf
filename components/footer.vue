<template lang="html">
  <footer>
    <div class="footer relative">
      <div class="size margin container align-items-start justify-content-center wrap">

        <div class="box--footer">
          <strong>Para participantes</strong>
          <ul>
            <li><a href="https://github.com/DeveloperParana/conduta">Código de conduta</a></li>
          </ul>
        </div>

        <div class="box--footer">
          <strong>Redes sociais</strong>
          <ul class="social container wrap">
            <li><a href="https://github.com/DeveloperParana" target="_blank"><i class="fab fa-github-alt"></i></a></li>
            <li><a href="https://twitter.com/developerparana" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/DeveloperParana/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="http://slack.devparana.org/" target="_blank"><i class="fab fa-slack-hash"></i></a></li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 100px 50px;
  width: 100%;
  .box--footer {
    padding: 20px;
    box-sizing: border-box;
    strong {
      font-size: 16px;
    }
  }
}
.box--footer ul {
  margin-top: 20px;
  list-style: none;
  li {
    margin-bottom: 10px;
    a {
      color: $color-1;
      &:hover {
        color: #fff;
      }
    }
  }
}
.box--footer .social {
  li a {
    width: 40px;
    height: 40px;
    font-size: 20px;
    background: transparent;
    border: 1px solid $color-1;
    color: $color-1;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      background: $color-1;
      color: $color-white;
    }
  }
}
</style>
