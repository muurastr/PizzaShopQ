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

function add_to_cart(id)
	{
		var key = 'product_' + id; 
		// выделение переменной = extract variable
		var x = window.localStorage.getItem(key);
		// т.е. id хеша будет выглядеть "product_1" 
		// чтобы можно было различать объекты, которые хранятся в localStorage
		x = x * 1 + 1;
		window.localStorage.setItem(key, x);

// // вывод кол-ва пицц в корзине
// 		alert('Items in your cart: ' + cart_get_number_of_items());

		update_orders_input();
		update_orders_buton(); 
	}

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); //получаем ключ
		var value = window.localStorage.getItem(key); //получаем значение
		// аналог в ruby:
		// hh[key] = x

		// теперь надо найти ключи, начинающиеся c "product_"
		if(key.indexOf('product_') == 0);
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt;
}

function update_orders_input()
{
	var orders = cart_get_orders(); //получение результата функции
	$('#orders_input').val(orders); //синтаксис jQuery

}

function update_orders_buton() 
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}

function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); //получаем ключ
		var value = window.localStorage.getItem(key); //получаем значение
		// аналог в ruby:
		// hh[key] = x

		// теперь надо найти ключи, начинающиеся c "product_"
		if(key.indexOf('product_') == 0);
		{
			orders = orders + key + '='  + value + ',';
		}
	}

	return orders;
}

function cancel_order()
{
	window.localStorage.clear(); 

	update_orders_input();
	update_orders_buton();

	$('#cart').text('You cart is now empty');
	
	return false;
}