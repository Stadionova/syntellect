// Черепашке нужно забраться на вершину холма. 
// Расстояние от подножия холма до его вершины - 100м. 
// Черепашка за день залезает вверх по холму на 50м. 
// Ночью она спит и скатывается на 30м вниз. 
// На какие сутки черепашка залезет на столб? 
// Требуется написать код на JS для решения задачи и дать ответ.

const way = 100;
const dayInterval = 50;
const lostInterval = 30;

const daysToFinishWay = () => {
    return way / (dayInterval - lostInterval);
}

daysToFinishWay(); // Ответ = 5

// В комнате находится человек.
// Через какое-то время в комнату заходит еще один человек и здоровается с первым.
// Людей в комнате становится 2, а счетчик рукопожатий становится равен 1.
// Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате.
// Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д.
// Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.

const maxPeople = 10;

const handleCount = () => {
    let handles = 0;
    for (let peopleCount = 1; peopleCount <= maxPeople; peopleCount++) {
        if (peopleCount != 1) {
            handles += 1;
        }
    }
    return handles;
}

handleCount(); // Ответ = 9

// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка...").
// Известно, что в строке встречаются повторяющиеся слова.
// Нужно написать функцию на JS.
// На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.
// Помимо кода на 1 и 2 задачу нужно предоставить числовой ответ.

const initialStr = "кошка,собака,лошадь,корова,кошка";

const uniqueStr = () => {
    const array = initialStr.split(',');
    const uniqueStr = [...new Set(array)].join();
    return uniqueStr;
}

uniqueStr();
