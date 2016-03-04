function something()
	{
		// получаем значение из localStorage
		var x = window.localStorage.getItem('b'); // x = hh['b']
		// уеличиваем это значение на 1 (x - переменная типа string)
		// для того, чтобы сделать ее int, надо умножить ее на 1
		// возвращает объект типа string, поэтому мы используем умножение
		// как самый простой способ преобразование строки в int
		x = x * 1 + 1; // x = x + 1
		// устанавливаем значение ключа b равным x
		window.localStorage.setItem('b', x); // hh['b'] = x
		alert(x);
		
	}