<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(this._check())
    if (!this._check()) {
      console.log(111)
      this.fix()
    }
  },
  methods:{
    _check: function () {
      return 'placeholder' in document.createElement('input');
    },
    //修复
    fix: function () {
      jQuery(':input[placeholder]').each(function (index, element) {
        var self = $(this),
          txt = self.attr('placeholder');
        self.wrap($('<div></div>').css({
          display: 'inline-block',
          position: 'relative',
          zoom: '1',
          border: 'none',
          background: 'none',
          padding: 'none',
          margin: 'none'
        }))
        var pos = self.position(),
          h = self.outerHeight(true),
          paddingleft = self.css('padding-left');
        var holder = $('<span></span>').text(txt).css({
          position: 'absolute',
          left: pos.left,
          top: pos.top,
          height: h,
          lineHeight: h + "px",
          paddingLeft: paddingleft,
          color: '#aaa'
        }).appendTo(self.parent())
        self.focusin(function (e) {
          holder.hide()
        }).focusout(function (e) {
          if (!self.val()) {
            holder.show()
          }
        })
        holder.click(function (e) {
          holder.hide()
          self.focus()
        })
      })
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }
  @font-face {
    font-family: 'pfr';
    src: url("/static/Fonts/PingFang Regular.otf");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'pfb';
    src: url("/static/Fonts/PingFang Bold.ttf");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'noodle';
    src: url("/static/Fonts/noodle.ttf");
    font-weight: normal;
    font-style: normal;
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  padding-top: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /*font-family: 'pfb';*/
}
ul{
  list-style: none;
}
  a{
    text-decoration: none;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  textarea{
    resize: none;
  }
  input::-ms-clear, input::-ms-reveal{
    display: none;
  }

</style>
