import gsap from 'gsap/all';
import EventEmitter from 'eventemitter3';

export default class Saucer extends EventEmitter{
    constructor(saucer, beamTop, beamBottom){
        super();
        this._saucerElement = saucer;
        this._beamTopElement = beamTop;
        this._beamBottomElement = beamBottom;
    }

    static get events(){
        return{
            FLY_IN: 'fly_in',
            FLY_AWAY: 'fly_away',
            BEAM_SHOW: 'beam_showed',
            BEAM_HIDE: 'beam_hide'
        };
    }

    async moveTo(event){
        if(event === 'fly_in'){

            const animation = gsap.timeline();

            await animation
                .to(this._saucerElement, { id: "flyIn", x: -835, duration: 2});
                
            
            this.emit(Saucer.events.FLY_IN, 'fly_in');
            
        } else if(event === 'fly_away'){

            await gsap.to(this._saucerElement, { id: "flyOut", x: -1800, duration: 2});
            this.emit(Saucer.events.FLY_AWAY, 'fly_away');
        }
    }

    async toggleBeam(event){

        const animation = new gsap.timeline();

        if(event === 'beam_showed'){

            await animation
                .to(this._beamTopElement, { id: "showTopBeam", opacity: 0.6, duration: 1})
                .to(this._beamBottomElement, { id: "showBottomBeam", opacity: 0.6, duration: 1});
            this.emit(Saucer.events.BEAM_SHOW, 'beam_showed');

        } else if(event === 'beam_hide'){

            await animation
                .to(this._beamTopElement, { id: "hideTopBeam", opacity: 0, duration: 0.5})
                .to(this._beamBottomElement, { id: "hideBottomBeam", opacity: 0, duration: 0.5});
            this.emit(Saucer.events.BEAM_HIDE, 'beam_hide');
        
        }
    }
}