import Entity from "./Entity";

class Monster extends Entity {
    action(verb, world) {
        if(verb === 'bump') {
            //attack
            world.addtoHistory(`Player attacks ${this.attributes.name}!`);
            this.attributes.health = this.attributes.health - 1;
            if(this.attributes.health <= 0) {
                world.addtoHistory(`${this.attributes.name} dies!`);
                world.remove(this);
            } else {
                world.addtoHistory(`${this.attributes.name}'s health = ${this.attributes.health}`)
                world.player.attributes.health = world.player.attributes.health - 1;
                if(world.player.attributes.health <= 0) {
                    world.addtoHistory(`You have died!`);
                } else {
                    world.addtoHistory(
                        `You have ${world.player.attributes.health} health`
                    )
                }
            }
        }
    }
}

export default Monster