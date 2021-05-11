<template>
    <div class="layout--main-body" :style="{paddingTop:$store.state.headerHeight+'px'}">
        <slot />
    </div>
</template>

<script>
export default {
    props:[]

}
</script>