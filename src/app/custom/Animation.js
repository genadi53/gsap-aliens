import Cow from './Cow';
import Saucer from './Saucer';

export default class Animation{
    constructor(){
        this.saucer = null;
        this.cow = null;
    }

    async start(){
        const saucerElement = document.getElementsByClassName("ufo");
        //const ufo = saucerElement.saucer;

        const cowElement = document.getElementsByClassName("cow");
        const cow = new Cow(cowElement.[0]);

        const beamTop = document.getElementById("beam-top");
        const beamBottom = document.getElementById("beam-bottom");

        const saucer = new Saucer(saucerElement, beamTop, beamBottom);
        
        this.saucer = saucer;
        this.cow = cow;

        await saucer.moveTo(Saucer.events.FLY_IN);
        await saucer.toggleBeam(Saucer.events.BEAM_SHOW);

        await cow.moveTo();    
        await cow.hide();

        await saucer.toggleBeam(Saucer.events.BEAM_HIDE);
        await saucer.moveTo(Saucer.events.FLY_AWAY);


    }

}