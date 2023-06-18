# js-framework-react-ass4

Valorant API är an public api från Games & Comics gruppen.
Jag vill med hjälp av Valorant API och react får vissa av information bl.a. bilder, descriptions och visar dem på sidan. 
I den mindre projekt har vi delat ner till visa mindre funktioner för att kunna öva på att under lätta läsbarheten och förståelse om hur den fungerar och lösa buggar ifall den behövs. Den kan vara väldight bra och användbar i kommande stora projekter.
as https://dash.valorant-api.com/endpoints/agents vi ska filterera med isPlayableCharacter=true för att undvika dubbel data. Så ändrar vi API key:en till "https://valorant-api.com/v1/agents?isPlayableCharacter=true" istället.
I App.jsx veriferar jag både articles för articlar och isLoading för att hålla koll om fetchet är klar med loading data. Efter fetchning kontrolerar vi responsen och datatan som har fått från API:en och ändrar vi isloadint to false för att visa att vi är klara med. Sedan lägger vi alla kommande datan till articles. Sen med hjälp av ".map" utförs på arrayen articles, och för varje element skapas komponenten "ArticleCompo" med tillhörande egenskaper och värden. "key" sätts för varje element med hjälp av attributet "displayName". Sen efter att ha skapat ArticleCompo-komponenten, returneras varje komponent som ett element i en ny array. Detta med ".map" används för att ha en lista av komponenter dynamiskt som ska skickas till article.jsx och behandlas där.


# Header.jsx
Den är funktion som gör header beror på variabeles som den får av oss där vi ropar på. Vilken title och vilken menu ska den få.

# Article.jsx
Den är också en funktion som ligger i en separat fil som ritar out articlar på hemsidan beroende på variabel som får från oss när vi ropar på och vill lägga till articlar i peojekten. Den får visa variables som vi har redan fått från fetchade API och skickar vi dem till Article för att ritas enligt vårt design.
 
