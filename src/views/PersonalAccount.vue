<template>
    <transition appear>
        <div class="account"></div>
    </transition>
</template>

<script>
export default {
  name: 'PersonalAccount'
}
</script>

<style lang="scss" scoped>
.account {
    position: fixed;
    z-index: 1999;
    background: pink;
    inset: 0;
}

.v-enter,
.v-leave-to {
    transform: translateX(100%);
}

.v-enter-to,
.v-leave {
    transform: translateX(0);
}

.v-enter-active,
.v-leave-active {
    transition: transform 1s;
}
</style>
