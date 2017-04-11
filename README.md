## Estudos sobre o Ionic2 e Ionic3

### Comandos

Iniciando um app Ionic2 

    $ ionic start nomeApp template --v2 

Instalando depedências  

    $ cd nomeApp/
    $ npm install

Visualizar app no browser

    $ ionic serve   
    ou 
    $ ionic serve --lab

Gerar paǵinas automaticamente

    $ ionic g page nomePagina

 **Observação** : toda pagina criada deve ser importada em 

    src/
        app/
            app.module.ts  

Criando Providers

    $ ionic g provider nomeProvider  

adicionar em  src/app/app.module.ts

    import { HttpModule } from '@angular/http';
    ...
    imports: [
        ....,
        HttpModule
    ]



### Tutoriais 

- App helloWorld : [10 Minutes with Ionic 2: Hello World](http://blog.ionic.io/10-minutes-with-ionic-2-hello-world/)
- App navigationApp : [10 Minutes with Ionic 2: Adding Pages and Navigation](http://blog.ionic.io/10-minutes-with-ionic-2-adding-pages-and-navigation/)
- App apiApp : [10 Minutes with Ionic 2: Calling an API](http://blog.ionic.io/10-minutes-with-ionic-2-calling-an-api/) e [An In-Depth Explanation of Providers in Ionic 2](https://www.joshmorony.com/an-in-depth-explanation-of-providers-in-ionic-2/)
- App fontawesomeapp : [Best practice when adding FontAwesome to an ionic2 app](https://luiscabrera.site/tech/2017/01/09/fontawesome-in-ionic2.html)
- App ionic2-delete : [Ionic 2: How to Create a Sliding Delete Button for Lists](https://www.joshmorony.com/ionic-2-how-to-create-a-sliding-delete-button-for-lists/)
