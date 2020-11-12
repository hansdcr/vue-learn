### vue3组件开发

#### 1. vue2基础上安装vue3

```shell
创建一个目录
mkdir -p vue3-learn
安装vue3
npm install @vue/cli
设置环境变量
cat ~/.bash_profile
export VUE3=/Users/11091752/Desktop/HansDev/vue-learn/vue3-learn/node_modules/.bin
export PATH=$PATH:$M2_HOME/bin:$VUE3
```

#### 2.  创建一个新项目

```
vue3 create vue3-json-schema-form
1、选择淘宝镜像源
2、手动设置
   babel
   typescript
   Linter/formateer
   unit testing
   选择版本
   vue3.x
   class-style选择： vue3可以不选
   选择jsx: yes
   eslint+pretter
   Jest
   In dedicated config files
   Save this as a preset for future projects: yes
   
```

#### 3. 启动项目

```
cd vue3-json-schema-form/
yarn serve
```

#### 4. prettierr 语法相关检查设置

```
cat .prettierrc
{
    "semi": false, // 是否写分号
    "singleQuote": false, // 是否使用单引号
    "arrowParens": "always", // 箭头函数写法规范
    "trailingComma": "all" 
}
```

编辑器设置

Setting-->format-->format-on-save

#### 5.  如何在vue3中定义组件

#### 6. h函数的用法

* template模版是如何通过函数的方式渲染的



#### 7. setup使用

#### 8. jsx使用

```
yarn add @vue/babel-plugin-jsx -D

vim babel.config.js
{
  "plugins": ["@vue/babel-plugin-jsx"]
}
```

#### 9.  Json schema

* json-schema.org

```
yarn add ajv -S
yarn add ajv-i18n -S
yarn add ajv-erros -S
```

* 定义schema

```js
const Ajv = require('ajv')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 10,
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
}

const ajv = new Ajv()
const validate = ajv.compile(schema)
const valid = validate({
  name: 'hans1111111',
  age: 18,
  pets: ['mimi', 'mama'],
  isWorker: true,
})
if (!valid) console.log(validate.errors)

```

##### 9.1 自定义format



##### 9.2 自定义关键字



##### 9.3 自定义错误信息本地语言转换



#### 10.  demo开发

```
yarn add monaco-editor -D
yarn add jss jss-preset-default -S
```

##### 10.1 基本框架

Lib/index.ts

```js
import SchemaForm from './SchemaForm'

export default SchemaForm

```

Lib/SchemaForm.tsx

```js
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <div>this is test</div>
    }
  },
})

```

