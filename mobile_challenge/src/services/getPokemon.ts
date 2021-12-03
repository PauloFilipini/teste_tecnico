import {api} from './api'

export function getPokemon(): any {
    api.get('pokemon?limit=10&offset=0')
    .then((resp) =>{
       console.log('teste',resp)
    })
}