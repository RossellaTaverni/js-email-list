// Recupero gli elementi del DOM che mi occorrono
const listEmails = document.getElementById('emailsList');

// Dichiarazione variabili che mi servono
// Qui salvo l’indirizzo dell’API (il sito che mi dà una email casuale ogni volta che lo chiamo).
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for(let i=0; i<10; i++){
    // Questo ciclo for ripete 10 volte una richiesta all’API.
    // Sto dicendo:"Fammi 10 richieste e per ognuna, prendi l'email e mettila nella lista."
    axios.get(endpoint).then((resp) => {
        // Con Axios faccio una richiesta HTTP GET verso l’API.
        // Quando il server risponde, entro dentro la funzione .then().
        const li = `<li class="list-group-item">${resp.data.response}</li>`
        listEmails.innerHTML += li
    })
}
