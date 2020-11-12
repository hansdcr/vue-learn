<template>
    <div>todo home
        <TodoCard :list="list1" :group="group" header-text="Todo1" class="kanban todo"/>
    </div>
</template>

<script>
import TodoCard from './components/index'

export default {
    name: 'Todo',
    components: { TodoCard },
    data(){
        return {
             group: 'mission',
            list1: [
                    { name: 'Mission', id: 1 },
                    { name: 'Mission', id: 2 },
                    { name: 'Mission', id: 3 },
                    { name: 'Mission', id: 4 }
                ]
        }
    }
}

</script>

<style lang="scss" scoped>

</style>