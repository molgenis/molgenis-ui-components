<template>
  <transition name="slide">
    <div v-if="value && value.length > 0" class="card d-block" :class="`${fixed ? 'fixed' : ''} text-${activeMessage.textType} bg-${activeMessage.type}`">
      <div v-if="activeMessage.title" class="card-header py-1 px-2">
        <strong>{{activeMessage.title}}</strong>
        <button type="button" class="close" :class="`text-${activeMessage.textType}`" @click="dequeue">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-body py-1 px-2">
        <p class="card-text">{{activeMessage.message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ToastComponent',
  props: {
    value: { // [ {type, textType, title, message, timeout} ]
      type: Array,
      required: true
    },
    fixed: {
      type: Boolean,
      required: false,
      default: () => true
    }
  },
  mounted () {
    this.onActivate()
  },
  computed: {
    activeMessage () {
      return this.value ? this.value[0] : {}
    }
  },
  methods: {
    onActivate () {
      if (this.activeMessage) {
        if (!this.activeMessage.type) {
          this.activeMessage.type = 'light'
        }
        if (!this.activeMessage.textType) {
          this.activeMessage.textType = 'dark'
        }
        if (this.activeMessage.timeout && this.activeMessage.timeout > 0) {
          setTimeout(this.dequeue, this.activeMessage.timeout)
        }
      }
    },
    dequeue () {
      clearTimeout(this.dequeue)
      this.value.shift()
      this.$emit('input', this.value)
      this.onActivate()
    }
  }
})
</script>

<style scoped lang="scss" >
  .close {
    text-shadow: none;
    &:focus, &:active {
      outline: none;
    }
  }
  .card {
    width: auto;
    &.fixed{
      position: fixed;
      bottom: 0rem;
      left: 4rem;
      right: 4rem;
    }
  }
  .card-header{
    background-color: rgba(0,0,0,.15);
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    opacity: 1;
  }
  .slide-enter, .slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
  .slide-enter-to, .slide-leave {
    transform: translateY(0);
    opacity: 1;
  }
</style>
