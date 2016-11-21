# SE2_16_171880_L4
Progetto del 16-11-16: Server Node.js con applicazione per la gestione degli impiegati.

Per poter eseguire l'applicazione è necessario un serve Node.js con installate queste librerie:
	- express: per la gestione delle richieste GET e POST;
	- bind: per poter eseguire il binding della risposta del server sul file template;
	- body-parser: per poter ottenere i vari campi inviati dai form all'interno delle richieste.
Tutte queste sono specificate all'iterno del file package.json presente nel repository.
	
All'iterno della directory lib è presente il file lib.js: esso contiene tutte le funzioni per l'elaborazione di
oggetti di tipo employee; questo file viene incluso dal server, perciò è necessario.

All'interno della directory public possono essere inseriti tutti i file che il client richiede al server, come
ad esempio i file javascript e css che vengono utilizzati dal browser, oppure le immagini...

All'interno della directory tpl sono inseriti i template utilizzati dal server per impaginare i dati da mostrare
al client.

----------------------  PER TESTARE L'APPLICAZIONE  --------------------------------------
Per poter eseguire l'applicazione è sufficiente far partire il server Node.js con il file index.js che contiene le funzioni
per la creazione e la gestione del server.
Una volta partito il server, in console viene specificato l'indirizzo e la porta utilizzata da inserire nel browser,
oppure direttamente cliccando sul link nel terminale.
Appena il browser si apre, l'applicazione è utilizzabile.
