import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
const name= "刷题系统"
const getVersion=()=>{
    return "v1.0.0"
}
const debugMod=true
const suppostTools = [
    {"id":1,"name":"自动刷题","url":"https://www.baidu.com"},
    {"id":2,"name":"错题本","url":"https://www.baidu.com"},
    {"id":3,"name":"记录器","url":"https://www.baidu.com"}
]
const debugModTrueStyle={color:"red",fontSize:"60px"}

function  Hello(){
    return(
        <div>系统启动中</div>
    )
}
class HelloComponent extends React.Component{
    render(){
        return(
            <div>类组件加载成功</div>
        )
    }
}

const clickA =()=>{
    return(
        alert("输入A")
    )
}

// const NewList=suppostTools.map(item=>
//     <button key={item.id}>{item.name}</button>
// )


function App(){
    return(
        <div>
            <p>刷题系统</p>
            <p style={debugMod?{color:'red'}:{}}>目前系统模式:{debugMod?'开发模式':'生产模式'}</p>
            <p>
                启动功能:
                <ul>
                {suppostTools.map(toolsData=><li id={toolsData.id}>{toolsData.name}</li>)}
                </ul>
            </p>
            <Hello ></Hello>
            <p style={debugMod?debugModTrueStyle:''}>测试控制器</p>
            <HelloComponent></HelloComponent>
            {/*<NewButton></NewButton>*/}
            <button onClick={clickA}>A选项</button>
        </div>
        )

}

export default App;
