/*
1. На старте загрузить буквы с сервера https://letters-back.makeconstnotvar.repl.co/letters, получить строку с буквами "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
2. Сделать текстовый флаг прогресса, слово loading.
3. Из строки букв сформировать массив пар букв ['AA','AB',...'AZ','BA','BB'...'ZZ'].
4. Вывести все пары на страницу.
5. Сделать рядом с каждой парой кнопку, которая красит пару в зеленый цвет.
6. Сделать рядом с каждой парой еще одну кнопку, которая удалит эту пару со страницы.
*/



export default function App() {
  const letters = "";
  const pairs = [];
  
  return (
    <div className="app">
      <h1>Буквы</h1>
      <div>{letters}</div>
      <h2>Пары букв</h2>
      <div>{pairs}</div>
    </div>
  );
}
