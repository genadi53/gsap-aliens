import gsap from 'gsap/all';
import EventEmitter from 'eventemitter3';

export default class Cow extends EventEmitter{
    constructor(cow){
        super();
        this._cowElement = cow;
    }

    static get events(){
        return {
            ABDUCT_COMPLETED: 'abduct_completed'
        };
    }

    async moveTo(){
        await gsap.to(this._cowElement, { id: "cowAbduction", y: -390});
        this.emit(Cow.events.ABDUCT_COMPLETED, 'abduct_completed')
    }

    async hide(){
        await gsap.to(this._cowElement, { id: "cowHide", opacity: 0});
    }
}
