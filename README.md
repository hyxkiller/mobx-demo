+ 在编译器中启用装饰器
在 tsconfig.json 中把编译器属性 **++experimentalDecorators++** 设置为 true (推荐做法)    
+ ***MobX 追踪属性访问，而不是值***
+ react实例初始化的时候，用mobx-react的Provider将实例包裹起来，参数为store仓库，类似reaxt-redux。
+ 全局store仓库可以引入多个模块的store，再export default暴露
+ 可将各模块的store和model拆分开，store中只用mobx中的observable保存相应数据，model中用mobx中的action定义相应函数供ui组件触发。ui组件中需引入mobx-react的inject和observer将ui组件包裹成高阶组件。store中的数据可以从对于props中的store名称中拿到(this.props.Hello)，model中的方法需引入model后再引用。

+ 对于一次性**异步**动作(eg: await一个接口后)，可以用runInAction(name?, fn),是action(name, fn)()的语法糖   
+ observer
    ```
    observer: 可将React组件变为响应式组件，是由单独的mobx-react提供的
    inject: 连接全局stores，需传递yigestores名称的列表给inject，使得store可作为props使用
    componentWillReact() 当组件因为它观察的数据发生了改变，会安排重新渲染，此钩子会触发。不接收参数，初始化渲染前不会触发，当接收新的props时并在setState调用后会触发此钩子
    ```
+ 如果想响应式的产生一个可以被其它observer使用的值，用@computed，不想产生值，只是达到一个效果，用autorun
    ```
    @computed get xxx() {}
    必须有return，只读, 返回一个计算后的值
    set 是一个自动的动作，不需要注解
    autoRun(fn,delay)
    ```
+ ***支持 React Native 吗?***
    ```
    当然，mobx 和 mobx-react 都可以在 React Native 中使用。后者通过导入 "mobx-react/native" 。 开发者工具还不支持 React Native 。
    注意，如果你打算将状态存储在你希望能够与热重新加载一起使用的组件中，那么不要在组件中使用装饰器(注解)，使用函数替代(例如，用 action(fn) 替代 @action)。
    ```
+ ***不要拷贝observables属性并存储在本地***
    ```
    Observer 组件只会追踪在 render 方法中存取的数据
    ```