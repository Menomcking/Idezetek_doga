import { listenerCount } from "process";
import { Quote } from "./Quote";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('firstex')?.addEventListener('click', async () =>{
        let response = await fetch('quotes.json');
        let outcome = await response.json();
            document.getElementById('output').innerHTML = "";
        let abc = outcome.quotes.sort((a: Quote, b: Quote) =>{
            let aname = a.author;
            let bname = b.author;
            if(aname < bname){
                return -1;
            }else if(aname > bname){
                return 1;
            }else return 0;
        });
        for(let u of outcome.quotes){
            let li = document.createElement('li');
            li.innerHTML = u.quote + " " + u.author; 
            console.log(u.quote + " " + u.author);   
            document.getElementById('output').appendChild(li);
        }
    });
    document.getElementById('secondex')?.addEventListener('click', async () => {
        let response = await fetch('quotes.json');
        let outcome = await response.json();
        document.getElementById('output').innerHTML = "";

        for(let u of outcome.quotes){
                let li = document.createElement('li');
                li.innerHTML = u.quote + " " + u.author; 
                console.log(u.quote + " " + u.author);   
                document.getElementById('output').appendChild(li);
            }
    });
});