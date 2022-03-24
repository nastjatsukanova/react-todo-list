 export const getCurrentDate = () => {
    const day = new Date();
    const currentDay = day.getDate();
    const currentMonth = '0' + (day.getMonth() + 1);
    const currentYear = day.getFullYear();
    const dayExpression = currentDay > 9 ? currentDay : '0' + currentDay;
    return `${currentYear}-${currentMonth}-${dayExpression}`;
}

export const setToStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

