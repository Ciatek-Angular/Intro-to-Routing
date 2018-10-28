import { Injectable } from '@angular/core'


@Injectable()
export class EvilService {

    evils = ['akaino', 'akatski', 'pain' ]

    getName(id) {
        let name = this.evils[id]
       return name
    }

    setName(id, name){
        this.evils[id] = name
    }

}