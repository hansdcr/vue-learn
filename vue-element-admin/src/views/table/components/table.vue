<template>
    <div>
        <div class="filter-container">
            <el-input 
                v-model="listQuery.title" 
                placeholder="Title" 
                style="width: 200px;" 
                class="filter-item" 
                @keyup.enter.native="handleFilter" />
            <el-select 
                v-model="listQuery.importance" 
                placeholder="Imp" 
                clearable 
                style="width: 90px" 
                class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
            </el-select>    
        </div>

        <el-table
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%;"
            @sort-change="sortChange"
        >
            <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Date" width="150px" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
            <el-table-column 
                prop="tag" 
                label="标签" 
                width="100" 
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
            />
        </el-table> -->
    </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'

export default {
    name: 'vTable',
    data(){
        return {
            list: null,
            listLoading: true,
            tableKey: 0,
            listQuery: {
                page: 1,
                limit: 20,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: '+id'
            },
            importanceOptions: [1, 2, 3],
        }
    },
    created(){
        this.getList()
    },
    methods: {
        filterTag(value, row){
            console.log(row)
            return row.tag === value
        },
        handleFilter(){
            this.listQuery.page = 1
            this.getList()
        },
        getList(){
            this.listLoading = true
            fetchList(this.listQuery).then(response => {
                console.log('=====', response.data.items)
                this.list = response.data.items
                this.total = response.data.total
                // Just to simulate the time of the request
                setTimeout(() => {
                this.listLoading = false
                }, 1.5 * 1000)
            })
        },
        sortChange(){},
        getSortClass(id){},
    }
}
</script>

<style lang="scss" scoped>
.filter-container {
    padding-bottom: 10px;
    .filter-item {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 10px;
    }

}
</style>