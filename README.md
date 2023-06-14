Epilepsy warning

#

Zmienne 'platform' i 'ball' zostały zdefiniowane oraz ustalono wartości dla promienia piłki, szerokości i wysokości platformy, prędkości platformy.

setup():
- Background: szerokość 400 px i wysokość 300 px.
- 'platform': zawiera informacje o położeniu, rozmiarze i prędkości platformy.
- 'update()' i 'display()': aktualizują położenie platformy oraz położenie piłki i je rysują.
- 'ball': informuje o położeniu, promieniu i prędkości piłki.

draw():
- background: random color.
- Wywołano metody 'update()' i 'display()' dla platformy i piłki, aby zaktualizować ich położenie i je narysować.

keyPressed():
- Sprawdzono, czy naciśnięty klawisz to strzałka w lewo lub prawo.
- Jeśli naciśnięto strzałkę w lewo, wywołano 'moveLeft()' dla platformy, ustawiając jej prędkość na ujemną.
- Jeśli naciśnięto strzałkę w prawo, wywołano 'moveRight()' dla platformy, ustawiając jej prędkość na dodatnią.

keyReleased():
- Sprawdzono, która strzałka (lewo lub prawo) została puszczona.
- Jeśli tak, wywołano 'stop()' dla platformy, ustawiając jej prędkość na zero.

Sprawdzanie, czy dolna krawędź piłki dotyka lub przekracza górną krawędź platformy:
- this.y + this.radius >= platform.y.

Sprawdzanie, czy piłka znajduje się wewnątrz poziomego zakresu platformy:
- this.x >= platform.x && this.x <= platform.x + platform.width.

Jeśli oba te warunki są spełnione:
- this.velocity.y *= -1.
- zmienia się kierunek ruchu piłki w pionie  co powoduje odbicie się piłki od platformy.