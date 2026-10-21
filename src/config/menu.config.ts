export type LayerType='espresso'|'milk'|'foam'|'syrup'|'water'|'ice'|'cream'|'chocolate'|'matcha';
export type Layer={type:LayerType;amount:number;color?:string};
export type Size='S'|'M'|'L';
export type Drink={id:string;name:string;description:string;category:'coffee'|'other'|'dessert';prices:Record<Size,number>;hot:boolean;layers:Layer[];latteArt?:'heart'|'none';emoji:string};
export const drinks:Drink[]=[
{id:'espresso',name:'Эспрессо',description:'Яркий, насыщенный, настоящий',category:'coffee',prices:{S:150,M:190,L:230},hot:true,layers:[{type:'espresso',amount:1}],emoji:'◕'},
{id:'americano',name:'Американо',description:'Эспрессо и горячая вода',category:'coffee',prices:{S:180,M:220,L:260},hot:true,layers:[{type:'espresso',amount:.36},{type:'water',amount:.64}],emoji:'◒'},
{id:'cappuccino',name:'Капучино',description:'Кофе, молоко и нежная воздушная пена',category:'coffee',prices:{S:220,M:270,L:320},hot:true,layers:[{type:'espresso',amount:.25},{type:'milk',amount:.4},{type:'foam',amount:.35}],latteArt:'heart',emoji:'✦'},
{id:'latte',name:'Латте',description:'Мягкий сливочный вкус',category:'coffee',prices:{S:240,M:290,L:340},hot:true,layers:[{type:'espresso',amount:.22},{type:'milk',amount:.64},{type:'foam',amount:.14}],latteArt:'heart',emoji:'♡'},
{id:'flatwhite',name:'Флэт уайт',description:'Крепкий кофе с микропеной',category:'coffee',prices:{S:250,M:300,L:350},hot:true,layers:[{type:'espresso',amount:.4},{type:'milk',amount:.49},{type:'foam',amount:.11}],emoji:'◐'},
{id:'raf',name:'Раф',description:'Нежный, сливочный, ванильный',category:'coffee',prices:{S:280,M:330,L:380},hot:true,layers:[{type:'espresso',amount:.2},{type:'cream',amount:.6},{type:'foam',amount:.2}],emoji:'✺'},
{id:'mocha',name:'Мокко',description:'Шоколад встречается с кофе',category:'coffee',prices:{S:280,M:330,L:380},hot:true,layers:[{type:'chocolate',amount:.14},{type:'espresso',amount:.24},{type:'milk',amount:.48},{type:'foam',amount:.14}],emoji:'◆'},
{id:'icedlatte',name:'Айс-латте',description:'Прохладный кофе со льдом',category:'coffee',prices:{S:260,M:310,L:360},hot:false,layers:[{type:'espresso',amount:.3},{type:'milk',amount:.55},{type:'ice',amount:.15}],emoji:'❄'},
{id:'matcha',name:'Матча-латте',description:'Зелёная энергия и нежное молоко',category:'other',prices:{S:280,M:330,L:380},hot:true,layers:[{type:'matcha',amount:.42},{type:'milk',amount:.44},{type:'foam',amount:.14}],emoji:'❋'},
{id:'cocoa',name:'Какао',description:'Шоколадный уют в стаканчике',category:'other',prices:{S:210,M:260,L:310},hot:true,layers:[{type:'chocolate',amount:.25},{type:'milk',amount:.6},{type:'foam',amount:.15}],emoji:'♥'}
];
export const sizes:Record<Size,{label:string;volume:number}>={S:{label:'Маленький',volume:250},M:{label:'Средний',volume:350},L:{label:'Большой',volume:450}};
export const milks=[{id:'regular',name:'Обычное',extra:0,color:'#f1d6b7'},{id:'oat',name:'Овсяное',extra:50,color:'#ddc7a4'},{id:'coconut',name:'Кокосовое',extra:60,color:'#f7eee0'},{id:'almond',name:'Миндальное',extra:60,color:'#dfc9ab'},{id:'none',name:'Без молока',extra:0,color:'#f1d6b7'}];
export const syrups=[{id:'none',name:'Без сиропа',extra:0,color:'#b56a3c'},{id:'vanilla',name:'Ваниль',extra:35,color:'#dca76a'},{id:'caramel',name:'Карамель',extra:35,color:'#a45d29'},{id:'hazelnut',name:'Лесной орех',extra:35,color:'#8a4c2d'}];
