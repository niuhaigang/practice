<template>
  <div class="carcontrol">
    <transition name='move'>
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  export default {
    props: ['food'],
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
          this.food.count = 1
        } else {
          this.food.count++
        }
        this.$root.eventHub.$emit('cart.add', event.target)
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 	.carcontrol
 		font-size: 0
 		.cart-decrease
 			display: inline-block
 			padding: 6px
 			transition: all 0.4s linear
 			&.move-enter-active
 				opacity: 1
 				transform: translate3D(0, 0, 0)
 				.inner
 					transition: all 0.4s linear
 					transform: rotate(0)
 			&.move-enter, &.move-leave-active
 				transform: translate3D(24px, 0, 0)
 				.inner
 					transition: all 0.4s linear
 					transform: rotate(180deg)
 			.inner
 				display: inline-block
 				line-heigh: 24px
 				font-size: 24px
 				color: rgb(0, 160, 220)
 		.cart-count
 			display: inline-block
 			vertical-align: top
 			width: 12px
 			padding-top: 12px
 			line-heigh: 24px
 			text-align: center
 			font-size: 10px
 			color: rgb(147, 153, 159)
 		.cart-add
 			display: inline-block
 			padding: 6px
 			line-heigh: 24px
 			font-size: 24px
 			color: rgb(0, 160, 220)
</style>