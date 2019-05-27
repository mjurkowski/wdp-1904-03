# Number of completed tasks: 5

## Quantity of merged tasks with master branch: 3

### Task List with points:

- [WDP190403-9](https://projects.kodilla.com/browse/WDP190403-9) --> 3 points

- [WDP190403-10](https://projects.kodilla.com/browse/WDP190403-10) --> 3 points

- [WDP190403-18](https://projects.kodilla.com/browse/WDP190403-18) --> 4 points

- [WDP190403-24](https://projects.kodilla.com/browse/WDP190403-24) --> 3 points

- [WDP190403-25](https://projects.kodilla.com/browse/WDP190403-25) --> 1 point

## Total points: 12

# Specyfication of my work:

### WDP190403-9

**Problem:** Klient chce, żeby wszystkie efekty hover na guzikach itd. (wszędzie gdzie na hover zmienia się kolor tła, tekstu lub ikon, etc.) były animowane i takie same dla wszystkich elementów. Co więcej, będzie chciał łatwo zmieniać czasy tych animacji (globalnie dla wszystkich elementów). Może potrzebować, żeby czas animacji koloru tła i czas animacji koloru tekstu/ikony były różne. 

Nie wiemy czy klient będzie pracował na plikach Sassa, więc robimy to przez extendowanie placeholdera. Extenda trzeba będzie dodać do styli każdego z hoverowanych elementów (ale tylko do nich). 

**Solution:** Ujednoliciłem czas animacji wszystkich hoverów tak aby można było go modyfikować w jednym miejscu poprzez utworzenie placeholdera i zextendowanie o niego konkretnych styli klas.

### WPD190403-10

**Problem:** Obecnie menu jest zrobione na elemencie <select>. Powinno być zrobione inaczej, aby była możliwość rozwijania po najechaniu myszką. 

**Solution** Dodałem hoverable menu za pomocą pseudoseleektora :hover na elemencie ul

### WDP190403-18

**Problem:** Karty produktów w sekcji "New furniture" mają być slajdami w karuzeli. 
  Wymagania: 

  - na raz na ekranie ma się pojawiać tyle elementów, ile mieści się w jednym rzędzie (po zaimplementowaniu RWD, czyli 1-4 w zależności od trybu)
  - zawsze ma być widoczny tylko 1 wiersz
  - kropki po prawej (obok listy kategorii) mają się generować dynamicznie, w zależności od tego ile "ekranów" jest do przewinięcia (np. 8 produktów po 2 w rzędzie, oznacza że będą 4 kropki, po kliknięciu pierwszej widać produkty 1 i 2, po kliknięciu drugiej - 3 i 4, etc.)

**Solution:** Dodałem karuzelę flickity dla kart nowych produktów i ostylowałem kropki (licznik widoków karuzeli) tak aby dobrze to wyglądało na różnych szerokościach ekranu

### WDP190403-24

**Problem:** Na stronie należy dodać sekcję "Promocje" według designu

**Solution:** Dodałem :)

### WDP190403-25

**Problem:** Dodać RWD do sekcji "Promocje"

**Solution:** Stworzyłem wersję mobilną sekcji "Promocje"
