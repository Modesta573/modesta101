function insert(num){
			document.form.textView.value = document.form.textView.value+num;
		}

		function c(){
			document.form.textView.value ="";
		}

		function del(){
			var x = document.form.textView.value
			document.form.textView.value = x.substring(0, x.lenght-1)
		}

		function equal(){
			var x = document.form.textView.value = eval(x);
			if(x == ""){
				alert('Masukan angka terlebih dahulu');
			}

			if(x){

				document.form.textView.value = eval(x);
			}

			document.form.textView.value = eval(document.form.textView.value);
		} 