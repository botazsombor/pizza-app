# Pizza rendelő oldal:

## Leírás
A projektben egy pizzéria online rendelő felületét valósítjuk meg. A főoldalra érkezve a felhasználó válogathat a külömböző
termékek közül, szűrhet kategóriákra és kiválasztva a terméket a kosárba teheti. A kosárra kattintva végignézheti a kosár tartalmát, melynél egyesével a termékeket törölheti vagy változtathatja a rendelni kívánt mennyiséget. A rendelésre kattintva meg kell adnia a szállítási címet és feladhatja a rendelést. A pizzéria tulajdonosának van egy admin oldala ahol megtekintheti a rendeléseket, beállíthatja őket teljesítettre, továbbá kezelheti a termékek tulajdonságait, árait, összetevőket. Ha még belefér az időnkbe felhasználói fiókok létrehozására is lenne lehetőség, amibe belépve a vásárló megtekintheti rendeléseit, megadhatja alapértelmezett címét, és elmentheti kedvenc termékeit a gyorsabb rendelés érdekében.

## Az alkalmazásban a szerepkörök:
Tulajdonos: adminisztrátor, rendelések megtekintése, termékek módosítása
Felhasználó: termékek szűrése, kosárba tétel, rendelés


## Funkcionális követelmények
  * Felhasználóként szeretnék tudni bejelentkezni az oldalra.
  * Felhasználóként szeretném tudni egy vagy több pizzát rendelni.
  * Tulajdonosként szeretnék új pizzákat létrehozni.
  * Tulajdonosként szeretnék új összetevőket létrehozni.
  * Tulajdonosként szeretném a pizzákat módosítani vagy törölni.
  
## Nem funkcionális követelmények
  * Felhasználóbarát, ergonomikus elrendezés és kinézet.
  * Gyors működés.
  * Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.
  
## Backend doksi
### Authorizáció
  * 2 féle jog van admin és felhasználó
  * A bejelentkezés a böngészőből kilépésig megmarad
  
### Entitások
  * Mindegyik entitásnak van delete/post/get metódusa
  * A delete/post műveletekhez admin jog kell
  * A post methódus map-et vár nem objektumot (Kaptunk érte pontlevonást, bár nem értem miért, hiszen működik. Lehetséges/valószínű, hogy változni fog, ha kész  a frontend.)
  
#### A felhasználók adatai elérhetőek a /felhasznalok alatt
  * /users : felhasználók listája
  * /users/id : az id azonosítójú felhasználó adatai
  * /users/id/pizzak : az id azonosítójú felhasználo által rendelt pizzák
  
#### A pizzák adatai elérhetőek a /pizzak alatt
  * /pizzak : a pizzák listája
  * /pizzak/id : az id azonosítójú pizza adatai
  * /pizzak/id/feltetek : az id azonosítójú pizza feltétei
  * /pizzak/id/alap : az id azonosítójú pizza alapja
  * /pizzak/id/teszta : az id azonosítójú pizza tesztája
  * /pizzak/id/users : az id azonosítójú pizzát megrendelő felhasználók listája
  
#### A feltétek adatai elérhetőek a /feltetek alatt
  * /feltetek : a feltétek listája
  * /feltetek/id : az id azonosítójú feltét adatai
  * /feltetek/id/pizzak : az id azonosítójú feltéttel rendelkező pizzák listája
  
#### A tészták adatai elérhetőek a /tesztak alatt
  * /tesztak : a tészták listája
  * /tesztak/id : az id azonosítójú tészta
  * /tesztak/id/pizzak : az id azonosítójú tésztával rendelkező pizzák listája

#### Az alapok adatai elérhetőek a /alapok alatt
  * /alapok : a tészták listája
  * /alapok/id : az id azonosítójú tészta
  * /alapok/id/pizzak : az id azonosítójú alappal rendelkező pizzák listája
