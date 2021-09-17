$( ()=>{

	var body=$('body');
	body.append('	<div id="Holder"></div>   ');
	var Holder=$('#Holder');


	Holder.append('<button id="HolderValue"></button> ');
	var HolderValue=$('#HolderValue');

	var SymbolsArrey=[ 0,1,2,3,4,5,6,7,8,9,'+','-','/','*' ];
	var Colors=['gray','blue','red','yellow','green','orange','violet','silver','snow',
	'seagreen','pink','peru'];
	
	for(let i=0;i<SymbolsArrey.length;i++){
		let rand=Math.floor(Math.random()*Colors.length);
		Holder.append('<button class="symbols symbols-'+i+'">'+SymbolsArrey[i]+'</button>');
		let fix=$('.symbols-'+i+' ');
		fix.css({background:Colors[rand]})
	}

	Holder.append('<button id="Delete">Izbrisi</div>');
	Holder.append('<button id="CallResult">Izracunaj</div>');
	var CallResult=$('#CallResult');
	var DelResult=$('#Delete');

	var Symbols=$('.symbols');

	for(let i=0;i<Symbols.length;i++){
		$(Symbols[i]).on('click',AddSymbolstoInput);

	}


	var input=$(HolderValue).text();
	
	function AddSymbolstoInput(){

		input+=$(this).text();
		$(HolderValue).text(input);	

	}


	CallResult.on('click',function CalculateResult(){
		input=eval(input)
		$(HolderValue).text(input);
		

	});

	DelResult.on('click',function DeleteResult(){
		input='';
		$(HolderValue).text('');
		

	});


} )