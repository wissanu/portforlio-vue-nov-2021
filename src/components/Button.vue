<template>
    <button class="btn" :style="{background : color}">{{text}}</button>
</template>

<script>

export default{
    name: 'Button',
    props: {
        text: {
            type: String,
            default: "Click here"
        },
        color: {
            type: String,
            default: "green"
        }
    }
}
</script>

<style scoped>

.btn {
    border: none;
    position: relative;
    display: inline-block;
    padding: 0.75em;
    color: white;
    letter-spacing: 2px;
    border-radius: 8px;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.btn:active {
    margin: 2px;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}


.btn:hover{
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
}


</style>