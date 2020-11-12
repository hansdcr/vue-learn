<template>
    <div class="board-column">
        <div class="board-column-header">{{headerText}}</div>
        <draggable
            :list="list"
            v-bind="$attrs"
            class="board-column-content"
            :set-data="setData"
            >
            <div v-for="element in list" :key="element.id" class="board-item">
                {{element.name}} {{element.id}}
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: 'TodoCard',
    components: { draggable },
    props: {
        list: {
            type: Array,
            default() {
                return []
                }
        },
        headerText: {
            type: String,
            default: 'Header'
        },
        options: {
            type: Object,
            default() { return {} }
        }
    },
    methods: {
        setData(dataTransfer) {}
    }
}

</script>

<style lang="scss" scoped>
.board-column {
    min-width: 300px;
    min-height: 100px;
    line-height: 50px;
    text-align: center;
    padding: 0 20px;
    background: #f0f0f0;

    .board-column-header {
       background: #333;
       color: #fff;
    }

    .board-column-content {
        .board-item {
            background-color: #fff;
            width: 100%;
            height: 64px;
            margin: 8px 0;
            text-align: left;
            padding: 5px 10px;
            line-height: 54px;
        }
    }
}


</style>