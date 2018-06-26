import PubSub from 'pubsub-js';

export default class TratadorErros {

    publicaErros(erros) {
        
        erros.errors.map(
           (err) => PubSub.publish("erro-validacao", err)
        );

    }
}