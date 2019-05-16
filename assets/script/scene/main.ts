// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import { reaction } from 'mobx'
import { store } from '../store/store'
import { observer, render, reactor, react } from "../store/observer";

const {ccclass, property} = cc._decorator;

@ccclass
@observer
export default class NewClass extends cc.Component {
    @property({
        type: cc.Node
    })
    number_show: cc.Node = null;


    @render
    protected renderState() {
        if(store.testNumber) {
            this.number_show.getComponent(cc.Label).string = store.testNumber.toString()
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        store.init()
    }

    

    addTestNum():void {
        store.testNumberAdd()
    }

    // update (dt) {}
}
