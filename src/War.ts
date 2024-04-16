import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy: Viking [];
    saxonArmy: Saxon [];
    
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }

    addViking(Viking: Viking){
        this.vikingArmy = [Viking];
    
    }
    addSaxon(Saxon: Saxon){
        this.saxonArmy = [Saxon];
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result


    }
    saxonAttack(){
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        
        const result = randomViking.receiveDamage(randomSaxon.attack())
        
        if (randomViking.health <=0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result
       
        
    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
    }
}