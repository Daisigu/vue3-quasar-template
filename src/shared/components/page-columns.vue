<template>
    <div class="page-columns">
        <div class="col-4">
            <slot name="left-col" />
        </div>
        <div class="col-8">
            <slot name="right-col" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-columns {
    display: flex;
    width: 100%;
    gap: 10px
}
</style>