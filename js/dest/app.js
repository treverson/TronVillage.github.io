var _0x2532=['map','build_percentage','round','build_cost','index','index.html','play.html','function','length','charCodeAt','hostname','getAddress','api_contract_address','{\x22entrys\x22:[{\x22outputs\x22:[{\x22type\x22:\x22uint256\x22}],\x22constant\x22:true,\x22name\x22:\x22totalFactories\x22,\x22stateMutability\x22:\x22View\x22,\x22type\x22:\x22Function\x22},{\x22outputs\x22:[{\x22type\x22:\x22uint256\x22}],\x22constant\x22:true,\x22name\x22:\x22totalPayout\x22,\x22stateMutability\x22:\x22View\x22,\x22type\x22:\x22Function\x22},{\x22outputs\x22:[{\x22name\x22:\x22coinsForBuy\x22,\x22type\x22:\x22uint256\x22},{\x22name\x22:\x22coinsForSale\x22,\x22type\x22:\x22uint256\x22},{\x22name\x22:\x22time\x22,\x22type\x22:\x22uint256\x22}],\x22constant\x22:true,\x22inputs\x22:[{\x22type\x22:\x22address\x22}],\x22name\x22:\x22players\x22,\x22stateMutability\x22:\x22View\x22,\x22type\x22:\x22Function\x22},{\x22outputs\x22:[{\x22type\x22:\x22uint256\x22}],\x22constant\x22:true,\x22name\x22:\x22totalPlayers\x22,\x22stateMutability\x22:\x22View\x22,\x22type\x22:\x22Function\x22},{\x22inputs\x22:[{\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_manager\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22Nonpayable\x22,\x22type\x22:\x22Constructor\x22},{\x22payable\x22:true,\x22name\x22:\x22deposit\x22,\x22stateMutability\x22:\x22Payable\x22,\x22type\x22:\x22Function\x22},{\x22inputs\x22:[{\x22name\x22:\x22_type\x22,\x22type\x22:\x22uint256\x22},{\x22name\x22:\x22_number\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22buy\x22,\x22stateMutability\x22:\x22Nonpayable\x22,\x22type\x22:\x22Function\x22},{\x22inputs\x22:[{\x22name\x22:\x22_coins\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22withdraw\x22,\x22stateMutability\x22:\x22Nonpayable\x22,\x22type\x22:\x22Function\x22},{\x22outputs\x22:[{\x22type\x22:\x22uint256[6]\x22}],\x22constant\x22:true,\x22inputs\x22:[{\x22name\x22:\x22_addr\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22factoriesOf\x22,\x22stateMutability\x22:\x22View\x22,\x22type\x22:\x22Function\x22}]}','parse','CoreContract','contract','entrys','smart_contract_address','string','user','getJSON','https://infura.biz/api/tronvillage/?address=','stats','coinsForBuy','coinsForSale','amount','reserve','totalPlayers','totalFactories','builds','factories','builds_count','balance','history','replaceState','location','pathname','#wallet-modal','show','href','index.html?a=1','body','css','beforeunload','scrollTop','show.bs.modal','html','hidden.bs.modal','ajax','a[href^=\x22#\x22]','attr','indexOf','offset','top','lang','#current-lang','addClass','lang-','text','forEach','append','<li><a\x20href=\x22../','\x22\x20class=\x22ms-lang\x20lang-','toUpperCase','</a></li>','#card-list','buildings','rem\x22\x20class=\x22header-text\x22>','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-danger\x20pull-right\x22><span\x20style=\x22font-size:\x201.65rem\x22\x20class=\x22header-text\x22>','%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x201.5rem\x22\x20class=\x22list-build-span\x22>','profit','monthShort','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x20buildingTooltipOuter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buildingTooltipInner\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-image-outer\x20list-group-item\x20list-build\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22card-image\x22\x20src=\x22../buildings/build_','.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22btn-card-outer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-buy=\x22','\x22\x20class=\x22btn-card\x20btn-white\x20hvr-grow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-hammer\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','build_card','button','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22list-group-item\x20list-build\x22><span\x20class=\x22list-build-span\x22>','built','\x22>...</span>\x20</b>','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22list-group-item\x20list-build\x22><span\x20class=\x22list-build-span\x22>','hour','</span><span\x20class=\x22pull-right\x22><b\x20class=\x22header-text\x22><span\x20style=\x22font-weight:\x20bold\x22\x20class=\x22countable\x22\x20data-value=\x22','\x22>...</span>\x20</b><img\x20src=\x22../images/coin.png\x22\x20class=\x22icon\x20mCS_img_loaded\x22></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-bottom:\x20none\x20!important;\x22\x20class=\x22list-group-item\x20list-build\x22><span\x20class=\x22list-build-span\x22>','price','.countable','each','data','actual','.btn-card','click','build','deposit','btn-withdraw','withdraw','btn-tronscan','https://tronscan.org/#/contract/','open','_blank','buy','#buyModal','find','.modal-title','.modal-price','.modal-input','.modal-button','.modal-image','.modal-rate','#modal-coin-stats','#modal-coin-btn','.modal-button-text','.modal-balance-type','.modal-balance','.modal-desc','form','val','rate','replace','substr','formatNumber','\x20TRX','ahashakeheartache','#notEnoughBalance','span','large','destroy','preventDefault','free','not_enough','modal','toggle','off','submit','delay','removeClass','button_text','balance_type','hide','build_buy_desc','input','build_buy_name','src','../buildings/build_','.png','buy_desc','buy_name','../images/chest_build_window.png','Loading...','trx_balance','\x20<span\x20style=\x22font-size:\x2014px\x22>TRX</span>','dispatchEvent','resize','init','close','buttons','icon','../images/empty.png','confirm','.swal-icon','<div\x20class=\x22loader\x22></div>','method','trx','args','send','toSun','then','successText','getTransactionInfo','catch','object','receipt','success','toLowerCase','cancelText','error','signature_rejected','rejectText','#btn-tooltip-chest-build','#chestBuildTooltip','#btn-tooltip-chest-free','#homebuilds-scroll','.simplebar-content','dragscroll','promise','.info','right','honeybee','popperChildren','tooltip','scale(','#buildingTooltip','#build-tooltip-name','#build-tooltip-percentage','#build-tooltip-per-day','#build-tooltip-cost','#build-tooltip-per-hour','#build-tooltip-image','addEventListener','wow','header-tron-play','header-logo','fadeInUp','zoomIn','style','nav-play','disabled','button,\x20a','focus','#Carousel-Heroes','carousel','cycle','.carousel-inner','.item','prev','next','#Carousel-Slide-2','#Carousel-Slide-3','#Carousel-Slide-1','getElementById','Carousel-Heroes','width','.carousel-control.left','.carousel-control.right','panstart\x20panend\x20panleft\x20panright','.item.active','last','children','first','panstart','type','pointers','pageX','initial','translate3d(','px,\x200,\x200)','.item.next','.item.prev','panend','panleft','slide.bs.carousel','slid.bs.carousel','slide','#slide-','active','.heroes-description','height','countup','#trx-counter','play','#amount-reserve','#amount-players','players','#amount-buildings','#amount-payout','payout','#balance-free','#builds-count','#builds-per-hour','.build-count','lvl','addressChanged','base58','reload','.tron-play','#faq-modal-inner','parent','#wallet-modal-inner','#buyModalInner','modalOuter',':visible','addHeight','innerHeight','minMargin','#village-name','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;','.rate','substring','lastIndexOf','search','split','web','load','value','build_per_day','build_per_hour','build_per_month'];(function(_0x311c97,_0x500edc){var _0x108eae=function(_0x53c1e3){while(--_0x53c1e3){_0x311c97['push'](_0x311c97['shift']());}};_0x108eae(++_0x500edc);}(_0x2532,0x11a));var _0x3d68=function(_0x540a37,_0xc73f68){_0x540a37=_0x540a37-0x0;var _0x2164c9=_0x2532[_0x540a37];return _0x2164c9;};!function(_0x4707b0){function _0x169911(_0x4707b0){_0x15e7f8()||(_0x13d0ca=_0x4707b0,_0x24a032(),$(window)['on'](_0x3d68('0x0'),_0x4509ef));}function _0x15e7f8(){var _0x4707b0=!0x0===_0x15e7f8[_0x3d68('0x1')];return _0x15e7f8[_0x3d68('0x1')]=!0x0,_0x4707b0;}function _0x24a032(){_0x13d0ca[_0x3d68('0x2')]=_0x13d0ca[_0x3d68('0x3')]['map'](function(_0x4707b0){return 0x18*_0x4707b0;}),_0x13d0ca[_0x3d68('0x4')]=_0x13d0ca[_0x3d68('0x2')][_0x3d68('0x5')](function(_0x4707b0){return 0x1e*_0x4707b0;}),_0x13d0ca[_0x3d68('0x6')]=_0x13d0ca[_0x3d68('0x4')][_0x3d68('0x5')](function(_0x4707b0,_0x169911){return Math[_0x3d68('0x7')](_0x4707b0/_0x13d0ca[_0x3d68('0x8')][_0x169911]*0x64);});}function _0x4509ef(){var _0x4707b0=function(){switch(_0x3e44d6()){case'':case _0x3d68('0x9'):case _0x3d68('0xa'):_0x39e49a();break;case'play':case _0x3d68('0xb'):_0x49f454();}},_0x169911=function(){};!function(_0x4707b0,_0x169911){var _0x15e7f8=function(_0x4707b0,_0x169911){return _0x4707b0[_0x169911];},_0x24a032=function(_0x4707b0){_0x3d68('0xc')==typeof _0x4707b0&&_0x4707b0();};_0x24a032(0xc667dd71===function(_0x4707b0){for(var _0x169911=0x1505,_0x15e7f8=_0x4707b0[_0x3d68('0xd')];_0x15e7f8;)_0x169911=0x21*_0x169911^_0x4707b0[_0x3d68('0xe')](--_0x15e7f8);return _0x169911>>>0x0;}(_0x15e7f8(_0x15e7f8(window,'location'),_0x3d68('0xf')))?_0x4707b0:_0x169911);}(_0x4707b0,_0x169911);}function _0x39e49a(){_0x3c54dd(),_0x499ea3(),_0x388300(),_0x1452dd(),_0x4b274c(),_0x5eed23(),_0x579618(),_0x45d0a8(),_0x4f97af(),_0x24b0e5(),_0x8b6c91(),_0x101191(_0x5e12b5),_0x8a3f9e();}function _0x49f454(){_0x49cb1f(function(){_0x3c54dd(),_0x8b12b8(),_0x499ea3(),_0x388300(),_0x1452dd(),_0x1b18e2(),_0x54733a(),_0x2c39d0(),_0x5eed23(),_0x4f97af(),_0x579618(),_0x45d0a8(),_0x4fa077();});}function _0x27c057(_0x4707b0){var _0x169911=function(_0x4707b0){return _0x4707b0['reduce'](function(_0x4707b0,_0x169911){return _0x4707b0+_0x169911;},0x0);};tronapp(function(_0x15e7f8){var _0x24a032;_0x24a032=_0x15e7f8?tronapp[_0x3d68('0x10')]():_0x13d0ca[_0x3d68('0x11')];if(_0x15e7f8){var _0x4509ef=_0x3d68('0x12');_0x4509ef=JSON[_0x3d68('0x13')](_0x4509ef),_0x13a3da[_0x3d68('0x14')]=tronWeb[_0x3d68('0x15')](_0x4509ef[_0x3d68('0x16')],_0x13d0ca[_0x3d68('0x17')]);}!function(){var _0x15e7f8=0x0,_0x4509ef=function(){var _0x4509ef=_0x263bda();_0x3d68('0x18')==typeof _0x4509ef[_0x3d68('0x19')]&&_0x4509ef[_0x3d68('0x19')][_0x3d68('0xd')]>0x0&&(_0x24a032=_0x4509ef[_0x3d68('0x19')]),$[_0x3d68('0x1a')](_0x3d68('0x1b')+_0x24a032,function(_0x24a032){var _0x4509ef=function(_0x4707b0){return parseInt(parseInt(_0x4707b0)/0xf4240);};_0x13a3da['balance']={'build':parseInt(_0x24a032[_0x3d68('0x1c')][_0x3d68('0x1d')]),'free':parseInt(_0x24a032[_0x3d68('0x1c')][_0x3d68('0x1e')])},_0x13a3da[_0x3d68('0x1f')]={'reserve':_0x4509ef(_0x24a032[_0x3d68('0x1c')][_0x3d68('0x20')]),'players':parseInt(_0x24a032[_0x3d68('0x1c')][_0x3d68('0x21')]),'buildings':parseInt(_0x24a032[_0x3d68('0x1c')][_0x3d68('0x22')]),'payout':_0x4509ef(_0x24a032[_0x3d68('0x1c')]['totalPayout'])},_0x13a3da[_0x3d68('0x23')]=_0x24a032[_0x3d68('0x1c')][_0x3d68('0x24')][_0x3d68('0x5')](function(_0x4707b0){return parseInt(_0x4707b0);}),_0x13a3da[_0x3d68('0x25')]=_0x169911(_0x13a3da[_0x3d68('0x23')]),_0x13a3da['builds_per_hour']=_0x169911(_0x13a3da[_0x3d68('0x23')][_0x3d68('0x5')](function(_0x4707b0,_0x169911){return _0x13d0ca[_0x3d68('0x3')][_0x169911]*_0x4707b0;},0x0)),_0x13a3da['trx_balance']=_0x4509ef(_0x24a032[_0x3d68('0x26')]),_0x4707b0(++_0x15e7f8);})['error'](function(_0x4707b0){});};setInterval(_0x4509ef,0x1388),_0x4509ef();}();});}function _0x4b274c(){tronapp(function(_0x4707b0){_0x4707b0||0x1===parseInt(_0x263bda()['a'])&&(window[_0x3d68('0x27')][_0x3d68('0x28')](null,null,window[_0x3d68('0x29')][_0x3d68('0x2a')]),$(_0x3d68('0x2b'))['modal'](_0x3d68('0x2c')));});}function _0x49cb1f(_0x4707b0){tronapp(function(_0x169911){_0x169911?_0x4707b0():document['location'][_0x3d68('0x2d')]=_0x3d68('0x2e');});}function _0x3c54dd(){setTimeout(function(){$(_0x3d68('0x2f'))[_0x3d68('0x30')]({'opacity':0x1});},0x64);}function _0x5eed23(){$(window)['on'](_0x3d68('0x31'),function(){$(window)[_0x3d68('0x32')](0x0);});}function _0x499ea3(){CountUp();}function _0x99ba2f(){$(_0x3d68('0x2f'))['on'](_0x3d68('0x33'),function(){$(_0x3d68('0x34'))[_0x3d68('0x30')]({'overflow':'hidden'});})['on'](_0x3d68('0x35'),function(){$(_0x3d68('0x34'))[_0x3d68('0x30')]({'overflow':''});});}function _0x388300(){$[_0x3d68('0x36')]({'url':'faq.html','type':'GET','success':function(_0x4707b0){$('body')['append'](_0x4707b0),_0x8b6c91(),_0x99ba2f(),_0x1db071();}});}function _0x579618(){var _0x4707b0=['#Carousel-Heroes'];$(_0x3d68('0x37'))['on']('click',function(_0x169911){var _0x15e7f8=$(this)[_0x3d68('0x38')]('href');if(-0x1===_0x4707b0[_0x3d68('0x39')](_0x15e7f8)){var _0x24a032=$(_0x15e7f8);_0x24a032[_0x3d68('0xd')]&&(_0x169911['preventDefault'](),$('html,\x20body')['animate']({'scrollTop':_0x24a032[_0x3d68('0x3a')]()[_0x3d68('0x3b')]},0x1f4));}});}function _0x45d0a8(){var _0x4707b0=['ru','en','cn'],_0x169911=_0x13d0ca[_0x3d68('0x3c')];$(_0x3d68('0x3d'))[_0x3d68('0x3e')](_0x3d68('0x3f')+_0x169911),$('#current-lang-inner')[_0x3d68('0x40')](_0x169911['toUpperCase']());var _0x15e7f8=_0x3e44d6();_0x4707b0[_0x3d68('0x41')](function(_0x4707b0){_0x4707b0!==_0x169911&&$('#dropdown-lang')[_0x3d68('0x42')](_0x3d68('0x43')+_0x4707b0+'/'+_0x15e7f8+_0x3d68('0x44')+_0x4707b0+'\x22>'+_0x4707b0[_0x3d68('0x45')]()+_0x3d68('0x46'));});}function _0x1b18e2(){var _0x4707b0=$(_0x3d68('0x47'));_0x4707b0[_0x3d68('0x34')]('');for(var _0x169911=0x0;_0x169911<_0x13d0ca[_0x3d68('0x48')][_0x3d68('0xd')];_0x169911++){var _0x15e7f8=1.8;0x2!==_0x169911||'ru'!==_0x13d0ca[_0x3d68('0x3c')]&&'en'!==_0x13d0ca[_0x3d68('0x3c')]||(_0x15e7f8=1.65),0x5===_0x169911&&'ru'===_0x13d0ca['lang']&&(_0x15e7f8=1.65),_0x4707b0[_0x3d68('0x42')]('<div\x20class=\x22col-sm-6\x20col-md-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-inner\x20list-group\x20tarif\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20list-group-item\x20list-build\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x20'+_0x15e7f8+_0x3d68('0x49')+_0x13d0ca[_0x3d68('0x48')][_0x169911]+_0x3d68('0x4a')+_0x13d0ca[_0x3d68('0x6')][_0x169911]+_0x3d68('0x4b')+_0x13d0ca['build_card'][_0x3d68('0x4c')][_0x3d68('0x4d')]+_0x3d68('0x4e')+(_0x169911+0x1)+_0x3d68('0x4f')+(_0x169911+0x1)+_0x3d68('0x50')+_0x13d0ca[_0x3d68('0x51')][_0x3d68('0x52')]+_0x3d68('0x53')+_0x13d0ca[_0x3d68('0x51')][_0x3d68('0x54')]+'</span>\x20<span\x20class=\x22pull-right\x22><b\x20class=\x22header-text\x22><span\x20style=\x22font-weight:\x20bold\x22\x20class=\x22build-count\x22\x20data-lvl=\x22'+(_0x169911+0x1)+_0x3d68('0x55')+_0x13d0ca[_0x3d68('0x51')]['pc']+_0x3d68('0x56')+_0x13d0ca['build_card']['profit'][_0x3d68('0x57')]+_0x3d68('0x58')+_0x13d0ca[_0x3d68('0x3')][_0x169911]+_0x3d68('0x59')+_0x13d0ca[_0x3d68('0x51')][_0x3d68('0x5a')]+'</span>\x20<span\x20class=\x22pull-right\x22><b\x20class=\x22header-text\x22><span\x20style=\x22font-weight:\x20bold\x22\x20data-value=\x22'+_0x13d0ca[_0x3d68('0x8')][_0x169911]+'\x22\x20class=\x22countable\x22>...</span>\x20</b><img\x20src=\x22../images/coin.png\x22\x20class=\x22icon\x20mCS_img_loaded\x22></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a</div>');}$(_0x3d68('0x5b'))[_0x3d68('0x5c')](function(){$(this)['countup']({'startVal':0x0,'endVal':parseInt($(this)[_0x3d68('0x5d')](_0x3d68('0x1'))),'duration':1.5});}),$('.card-image')['each'](function(){var _0x4707b0=(0xb9-$(this)[_0x3d68('0x5e')]('height'))/0x2;(_0x4707b0=_0x4707b0>0xa?0xa:_0x4707b0)>0x0&&$(this)[_0x3d68('0x30')]({'margin-top':_0x4707b0+'px','margin-bottom':_0x4707b0+'px'});});}function _0x54733a(){$(_0x3d68('0x5f'))['on'](_0x3d68('0x60'),function(){var _0x4707b0=_0x3d68('0x61'),_0x169911=$(this)[_0x3d68('0x38')]('id');if('btn-deposit'===_0x169911)_0x4707b0=_0x3d68('0x62');else if(_0x3d68('0x63')===_0x169911)_0x4707b0=_0x3d68('0x64');else if(_0x3d68('0x65')===_0x169911){var _0x15e7f8=_0x3d68('0x66')+_0x13d0ca[_0x3d68('0x17')];return void window[_0x3d68('0x67')](_0x15e7f8,_0x3d68('0x68'));}var _0x24a032=$(this)[_0x3d68('0x5d')](_0x3d68('0x69'))-0x1,_0x4509ef=$(_0x3d68('0x6a')),_0x39e49a=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x6c')),_0x49f454=_0x4509ef['find'](_0x3d68('0x6d')),_0x27c057=_0x4509ef['find'](_0x3d68('0x6e')),_0x4b274c=_0x4509ef['find'](_0x3d68('0x6f')),_0x49cb1f=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x70')),_0x3c54dd=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x71')),_0x5eed23=$(_0x3d68('0x72')),_0x499ea3=$(_0x3d68('0x73')),_0x99ba2f=_0x4509ef[_0x3d68('0x6b')]('.modal-count-text'),_0x388300=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x74')),_0x579618=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x75')),_0x45d0a8=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x76')),_0x1b18e2=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x77')),_0x54733a=_0x4509ef[_0x3d68('0x6b')](_0x3d68('0x78')),_0x525339=function(){var _0x4707b0=_0x27c057[_0x3d68('0x79')]()>0x0?_0x27c057['val']():0x1;return _0x3d68('0x18')==typeof _0x4707b0?parseInt(_0x4707b0):_0x4707b0;},_0x6e5b75=function(){return _0x3d68('0x61')===_0x4707b0?_0x525339()*_0x13d0ca[_0x3d68('0x8')][_0x24a032]:_0x3d68('0x62')===_0x4707b0?_0x525339()*_0x13d0ca[_0x3d68('0x7a')]:_0x525339()/_0x13d0ca[_0x3d68('0x7a')];},_0x4a82df=function(){var _0x169911=_0x27c057[_0x3d68('0x79')]()[_0x3d68('0x7b')](/\D/g,'');_0x3d68('0x62')===_0x4707b0?_0x169911=_0x169911[_0x3d68('0x7c')](0x0,0x8):_0x3d68('0x64')===_0x4707b0?_0x169911=_0x169911[_0x3d68('0x7c')](0x0,0xa):_0x3d68('0x61')===_0x4707b0&&(_0x169911=_0x169911[_0x3d68('0x7c')](0x0,0x4)),_0x27c057[_0x3d68('0x79')](_0x169911),_0x169911=_0x6e5b75(),Number(_0x169911)===_0x169911&&_0x169911%0x1!=0x0?(_0x169911=_0x169911['toString']()['split']('.'),_0x169911=CountUp[_0x3d68('0x7d')](_0x169911[0x0])+'.'+_0x169911[0x1]):_0x169911=CountUp['formatNumber'](_0x169911),_0x3d68('0x64')===_0x4707b0&&(_0x169911+=_0x3d68('0x7e')),_0x49f454[_0x3d68('0x40')](_0x169911);},_0x52bd4c=function(){_0x4b274c[_0x3d68('0x3e')](_0x3d68('0x7f'));},_0x1692ff=function(_0x4707b0){var _0x169911=$(_0x3d68('0x80'));_0x169911[_0x3d68('0x6b')](_0x3d68('0x81'))[_0x3d68('0x40')](_0x4707b0),tippy(_0x4b274c[0x0],{'content':_0x169911[_0x3d68('0x34')](),'trigger':_0x3d68('0x60'),'placement':'right','showOnInit':!0x0,'arrow':!0x0,'arrowType':_0x3d68('0x7'),'size':_0x3d68('0x82'),'onHidden':function(_0x4707b0){_0x4707b0[_0x3d68('0x83')]();}});},_0x46297f=function(_0x169911){_0x169911[_0x3d68('0x84')](),_0x3d68('0x61')===_0x4707b0?_0x13a3da[_0x3d68('0x26')]['build']+_0x13a3da[_0x3d68('0x26')][_0x3d68('0x85')]<_0x6e5b75()?(_0x52bd4c(),_0x1692ff(_0x13d0ca[_0x3d68('0x86')][_0x3d68('0x61')])):(_0x4509ef[_0x3d68('0x87')](_0x3d68('0x88')),_0x310c17({'method':_0x3d68('0x69'),'trx':0x0,'args':[_0x24a032,_0x525339()]})):_0x3d68('0x62')===_0x4707b0?_0x13a3da['trx_balance']<_0x525339()?(_0x52bd4c(),_0x1692ff(_0x13d0ca[_0x3d68('0x86')][_0x3d68('0x62')])):(_0x4509ef[_0x3d68('0x87')]('toggle'),_0x310c17({'method':_0x3d68('0x62'),'trx':_0x525339(),'args':[]})):_0x3d68('0x64')===_0x4707b0&&(_0x13a3da['balance'][_0x3d68('0x85')]<_0x525339()?(_0x52bd4c(),_0x1692ff(_0x13d0ca[_0x3d68('0x86')][_0x3d68('0x64')])):(_0x4509ef[_0x3d68('0x87')](_0x3d68('0x88')),_0x310c17({'method':_0x3d68('0x64'),'trx':0x0,'args':[_0x525339()]})));};_0x27c057[_0x3d68('0x89')](),_0x4b274c[_0x3d68('0x89')](),_0x54733a[_0x3d68('0x89')](),_0x54733a['on'](_0x3d68('0x8a'),_0x46297f),_0x4b274c['on']('webkitAnimationEnd\x20oanimationend\x20msAnimationEnd\x20animationend',function(){$(this)[_0x3d68('0x8b')](0xc8)[_0x3d68('0x8c')]('ahashakeheartache');}),_0x99ba2f['text'](_0x13d0ca['count_type'][_0x4707b0]),_0x388300[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x8d')][_0x4707b0]),_0x579618[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x8e')][_0x4707b0]),_0x3d68('0x61')===_0x4707b0?(_0x3c54dd[_0x3d68('0x8f')](),_0x5eed23[_0x3d68('0x2c')](),_0x499ea3[_0x3d68('0x2c')](),_0x1b18e2[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x90')][_0x24a032]),_0x45d0a8[_0x3d68('0x40')](CountUp['formatNumber'](_0x13a3da['balance'][_0x3d68('0x61')]+_0x13a3da[_0x3d68('0x26')]['free'])),_0x27c057[_0x3d68('0x79')](0x1)['on'](_0x3d68('0x91'),_0x4a82df),_0x4a82df(),_0x39e49a[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x92')][_0x24a032]),_0x49cb1f[_0x3d68('0x38')](_0x3d68('0x93'),_0x3d68('0x94')+(_0x24a032+0x1)+_0x3d68('0x95'))):(_0x3c54dd[_0x3d68('0x2c')](),_0x1b18e2[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x96')][_0x4707b0]),_0x39e49a['text'](_0x13d0ca[_0x3d68('0x97')][_0x4707b0]),_0x3d68('0x62')===_0x4707b0?(_0x5eed23[_0x3d68('0x8f')](),_0x499ea3[_0x3d68('0x2c')](),_0x27c057['val'](0x64)['on'](_0x3d68('0x91'),_0x4a82df),_0x49cb1f['attr'](_0x3d68('0x93'),_0x3d68('0x98')),_0x45d0a8[_0x3d68('0x34')](_0x3d68('0x99')),_0x45d0a8[_0x3d68('0x34')](CountUp[_0x3d68('0x7d')](_0x13a3da[_0x3d68('0x9a')])+_0x3d68('0x9b'))):(_0x5eed23[_0x3d68('0x2c')](),_0x499ea3[_0x3d68('0x8f')](),_0x27c057['val'](0x1388)['on'](_0x3d68('0x91'),_0x4a82df),_0x49cb1f[_0x3d68('0x38')](_0x3d68('0x93'),'../images/chest_free_window.png'),_0x45d0a8[_0x3d68('0x40')](CountUp[_0x3d68('0x7d')](_0x13a3da[_0x3d68('0x26')][_0x3d68('0x85')])))),_0x4a82df(),_0x4509ef[_0x3d68('0x87')](_0x3d68('0x2c')),window[_0x3d68('0x9c')](new Event(_0x3d68('0x9d')));});}function _0x310c17(_0x4707b0){var _0x169911=function(_0x4707b0,_0x15e7f8,_0x24a032){_0x169911[_0x3d68('0x9e')]&&swal[_0x3d68('0x9f')](),_0x169911[_0x3d68('0x9e')]=!0x0;var _0x4509ef={'text':_0x4707b0};void 0x0===_0x24a032&&(_0x24a032={'cancel':_0x13d0ca['confirm']['button']}),_0x4509ef[_0x3d68('0xa0')]=_0x24a032,void 0x0!==_0x15e7f8&&(_0x4509ef[_0x3d68('0xa1')]='function'==typeof _0x15e7f8?_0x3d68('0xa2'):_0x15e7f8),swal(_0x4509ef),_0x3d68('0xc')==typeof _0x15e7f8&&_0x15e7f8();};tronapp(function(_0x15e7f8){if(_0x15e7f8){_0x169911(_0x13d0ca[_0x3d68('0xa3')][_0x3d68('0x40')],function(){$(_0x3d68('0xa4'))[_0x3d68('0x34')](_0x3d68('0xa5'));},!0x1);var _0x24a032,_0x4509ef=_0x13a3da[_0x3d68('0x14')][_0x4707b0[_0x3d68('0xa6')]],_0x39e49a=_0x4707b0[_0x3d68('0xa7')];switch(_0x4707b0[_0x3d68('0xa8')][_0x3d68('0xd')]){case 0x0:_0x24a032=_0x4509ef();break;case 0x1:_0x24a032=_0x4509ef(_0x4707b0[_0x3d68('0xa8')][0x0]);break;case 0x2:_0x24a032=_0x4509ef(_0x4707b0[_0x3d68('0xa8')][0x0],_0x4707b0[_0x3d68('0xa8')][0x1]);}_0x24a032[_0x3d68('0xa9')]({'callValue':tronWeb[_0x3d68('0xaa')](_0x39e49a)})[_0x3d68('0xab')](function(_0x4707b0){_0x169911(_0x13d0ca[_0x3d68('0xa3')][_0x3d68('0xac')],'success');var _0x15e7f8=function(_0x4707b0,_0x169911,_0x15e7f8){tronWeb[_0x3d68('0xa7')][_0x3d68('0xad')](_0x4707b0)['then'](_0x169911)[_0x3d68('0xae')](_0x15e7f8);},_0x24a032=function(){_0x15e7f8(_0x4707b0,function(_0x4707b0){_0x3d68('0xaf')==typeof _0x4707b0[_0x3d68('0xb0')]?_0x3d68('0xb1')===_0x4707b0[_0x3d68('0xb0')]['result'][_0x3d68('0xb2')]()||_0x169911(_0x13d0ca[_0x3d68('0xa3')][_0x3d68('0xb3')],_0x3d68('0xb4')):setTimeout(_0x24a032,0xfa0);},function(_0x4707b0){});};_0x24a032();})[_0x3d68('0xae')](function(_0x4707b0){_0x3d68('0x18')==typeof _0x4707b0&&!/^Unknown error/['test'](_0x4707b0)||_0x3d68('0xaf')==typeof _0x4707b0&&_0x3d68('0xb5')===_0x4707b0['type']?_0x169911(_0x13d0ca[_0x3d68('0xa3')][_0x3d68('0xb6')]):_0x169911(_0x13d0ca[_0x3d68('0xa3')][_0x3d68('0xb3')],'error');});}else _0x169911(_0x13d0ca[_0x3d68('0xa3')]['failText']);});}function _0x2c39d0(){tippy($(_0x3d68('0xb7'))[0x0],{'content':$(_0x3d68('0xb8'))['html'](),'placement':_0x3d68('0x3b'),'arrow':!0x0,'arrowType':'round','size':'large'}),tippy($(_0x3d68('0xb9'))[0x0],{'content':$('#chestFreeTooltip')[_0x3d68('0x34')](),'placement':_0x3d68('0x3b'),'arrow':!0x0,'arrowType':'round','size':_0x3d68('0x82')});}function _0x101191(_0x4707b0){!function(){new SimpleBar($(_0x3d68('0xba'))[0x0],{'scrollbarMinSize':0x19,'scrollbarMaxSize':0x2bc,'timeout':0x28a}),$(_0x3d68('0xbb'))[_0x3d68('0x5c')](function(){$(this)[_0x3d68('0x3e')](_0x3d68('0xbc'));})[_0x3d68('0xbd')]()['done'](function(){dragscroll['reset'](),_0x4707b0();});}();}function _0x5e12b5(){var _0x4707b0=_0x13d0ca[_0x3d68('0x48')],_0x169911=_0x13d0ca[_0x3d68('0x8')],_0x15e7f8=_0x13d0ca[_0x3d68('0x2')],_0x24a032=_0x13d0ca[_0x3d68('0x3')],_0x4509ef=_0x13d0ca[_0x3d68('0x6')];tippy(_0x3d68('0xbe'),{'arrow':!0x0,'arrowType':'round','placement':_0x3d68('0xbf'),'theme':_0x3d68('0xc0'),'performance':!0x0,'distance':0x14,'onShow':function(_0x4707b0){var _0x169911=$(_0x4707b0[_0x3d68('0xc1')][_0x3d68('0xc2')]),_0x15e7f8=0x1;window['innerWidth']<0x168&&(_0x15e7f8=0.8),_0x169911[_0x3d68('0x30')]({'transform':_0x3d68('0xc3')+_0x15e7f8+')'});},'content':function(_0x39e49a){var _0x49f454=$(_0x39e49a)[_0x3d68('0x5d')](_0x3d68('0x61')),_0x27c057=$(_0x3d68('0xc4'));return $(_0x3d68('0xc5'))[_0x3d68('0x40')](_0x4707b0[_0x49f454-0x1]),$(_0x3d68('0xc6'))[_0x3d68('0x40')](_0x4509ef[_0x49f454-0x1]+'%'),$(_0x3d68('0xc7'))[_0x3d68('0x40')](CountUp[_0x3d68('0x7d')](_0x15e7f8[_0x49f454-0x1])),$(_0x3d68('0xc8'))[_0x3d68('0x40')](CountUp['formatNumber'](_0x169911[_0x49f454-0x1])),$(_0x3d68('0xc9'))['text'](CountUp[_0x3d68('0x7d')](_0x24a032[_0x49f454-0x1])),$(_0x3d68('0xca'))[_0x3d68('0x38')](_0x3d68('0x93'),_0x3d68('0x94')+_0x49f454+_0x3d68('0x95')),_0x27c057[_0x3d68('0x34')]();}});}function _0x1452dd(){var _0x4707b0=function(_0x4707b0,_0x169911){_0x4707b0[_0x3d68('0xcb')]('animationend',_0x169911);},_0x169911=new WOW({'boxClass':_0x3d68('0xcc'),'animateClass':'animated','offset':0x0,'mobile':!0x1,'live':!0x0,'callback':function(_0x169911){var _0x15e7f8=$(_0x169911)['attr']('id');_0x3d68('0xcd')!==_0x15e7f8&&_0x3d68('0xce')!==_0x15e7f8||_0x4707b0(_0x169911,function(){$(_0x169911)[_0x3d68('0x8c')](_0x3d68('0xcf'))['removeClass'](_0x3d68('0xd0'))[_0x3d68('0x38')](_0x3d68('0xd1'),'');}),_0x3d68('0xd2')===_0x15e7f8&&_0x4707b0(_0x169911,function(){$(_0x169911)[_0x3d68('0x30')]({'opacity':0x1});});},'scrollContainer':null});_0x205ff3(),_0x169911[_0x3d68('0xd3')]()?_0x3d68('0xb')===_0x3e44d6()&&$('#nav-play')[_0x3d68('0x30')]({'opacity':0x1}):_0x169911[_0x3d68('0x9e')]();}function _0x4f97af(){$(_0x3d68('0xd4'))['on']('click',function(){this[_0x3d68('0xd5')]();});}function _0x24b0e5(){function _0x4707b0(){$(_0x3d68('0xd6'))[_0x3d68('0xd7')](_0x3d68('0xd8')),_0x27c057=$(_0x3d68('0xd9'))['width'](),_0x49f454=0x0,_0x39e49a=0x0,_0x4b274c='';}function _0x169911(){$(_0x3d68('0xda'))['css']({'transition':'','transform':''}),$(_0x3d68('0xda'))[_0x3d68('0x8c')]('prev'),$(_0x3d68('0xda'))[_0x3d68('0x8c')]('next'),$('#Carousel-Heroes')[_0x3d68('0xd7')](_0x3d68('0xdb')),setTimeout(function(){_0x4707b0();},0x258);}function _0x15e7f8(){$(_0x3d68('0xda'))[_0x3d68('0x30')]({'transition':'','transform':''}),$('.item')[_0x3d68('0x8c')](_0x3d68('0xdb')),$(_0x3d68('0xda'))[_0x3d68('0x8c')](_0x3d68('0xdc')),$(_0x3d68('0xd6'))[_0x3d68('0xd7')](_0x3d68('0xdc')),setTimeout(function(){_0x4707b0();},0x258);}$(_0x3d68('0xdd'))[_0x3d68('0x34')]($('#Carousel-Slide-0')[_0x3d68('0x34')]()),$(_0x3d68('0xde'))['html']($(_0x3d68('0xdf'))[_0x3d68('0x34')]());var _0x24a032=!0x1,_0x4509ef=new Hammer(document[_0x3d68('0xe0')](_0x3d68('0xe1'))),_0x39e49a=0x0,_0x49f454=0x0,_0x27c057=$(_0x3d68('0xd9'))[_0x3d68('0xe2')](),_0x4b274c='';$(_0x3d68('0xd6'))['carousel']({'interval':!0x1}),$(_0x3d68('0xe3'))[_0x3d68('0x60')](function(){_0x24a032||_0x169911();}),$(_0x3d68('0xe4'))[_0x3d68('0x60')](function(){_0x24a032||_0x15e7f8();}),_0x4509ef['on'](_0x3d68('0xe5'),function(_0x4509ef){if(!_0x24a032){$(_0x3d68('0xd6'))[_0x3d68('0xd7')]('pause');var _0x49cb1f=$(_0x3d68('0xe6'))['prev']();void 0x0===_0x49cb1f[0x0]&&(_0x49cb1f=$(_0x3d68('0xd9'))['children']()[_0x3d68('0xe7')]()),_0x49cb1f[_0x3d68('0x3e')](_0x3d68('0xdb'));var _0x3c54dd=$(_0x3d68('0xe6'))[_0x3d68('0xdc')]();if(void 0x0===_0x3c54dd[0x0]&&(_0x3c54dd=$(_0x3d68('0xd9'))[_0x3d68('0xe8')]()[_0x3d68('0xe9')]()),_0x3c54dd[_0x3d68('0x3e')](_0x3d68('0xdc')),_0x3d68('0xea')===_0x4509ef[_0x3d68('0xeb')])return _0x39e49a=_0x4509ef[_0x3d68('0xec')][0x0][_0x3d68('0xed')],0x0;if(_0x39e49a!==_0x4509ef['pointers'][0x0][_0x3d68('0xed')]){_0x4b274c=_0x4509ef['type'];var _0x5eed23=_0x4509ef[_0x3d68('0xec')][0x0][_0x3d68('0xed')]-_0x39e49a;$(_0x3d68('0xe6'))[_0x3d68('0x30')]({'transition':_0x3d68('0xee'),'transform':_0x3d68('0xef')+(_0x49f454+_0x5eed23)+_0x3d68('0xf0')}),$(_0x3d68('0xf1'))[_0x3d68('0x30')]({'transition':'initial','transform':_0x3d68('0xef')+(_0x49f454+_0x5eed23+_0x27c057)+_0x3d68('0xf0')}),$(_0x3d68('0xf2'))[_0x3d68('0x30')]({'transition':'initial','transform':'translate3d('+(_0x49f454+_0x5eed23-_0x27c057)+_0x3d68('0xf0')}),_0x49f454+=_0x5eed23,_0x39e49a=_0x4509ef[_0x3d68('0xec')][0x0]['pageX'];}if(_0x3d68('0xf3')===_0x4509ef[_0x3d68('0xeb')]){if((_0x49f454>_0x27c057/0x4||_0x49f454>=0x78)&&'panright'===_0x4b274c)return _0x169911(),0x0;if((_0x49f454<-_0x27c057/0x4||_0x49f454<=0x78)&&_0x3d68('0xf4')===_0x4b274c)return _0x15e7f8(),0x0;$(_0x3d68('0xda'))['css']({'transition':'','transform':''}),_0x4707b0();}}}),$('#Carousel-Heroes')['on'](_0x3d68('0xf5'),function(_0x4707b0){_0x24a032=!0x0;})['on'](_0x3d68('0xf6'),function(_0x4707b0){_0x24a032=!0x1;var _0x169911=$(_0x4707b0['relatedTarget'])[_0x3d68('0x5d')](_0x3d68('0xf7'))%0x2;$(_0x3d68('0xf8')+_0x169911)['addClass'](_0x3d68('0xf9')),$(_0x3d68('0xf8')+(_0x169911?0x0:0x1))[_0x3d68('0x8c')](_0x3d68('0xf9'));});var _0x49cb1f=function(){var _0x4707b0=$(_0x3d68('0xfa')),_0x169911=_0x4707b0['length'],_0x15e7f8=0x0;_0x4707b0[_0x3d68('0x5c')](function(_0x24a032){var _0x4509ef=$(this);_0x4509ef[_0x3d68('0x30')]({'height':''});var _0x39e49a=_0x4509ef[_0x3d68('0x5e')](_0x3d68('0xfb'));_0x15e7f8=_0x15e7f8>_0x39e49a?_0x15e7f8:_0x39e49a,_0x24a032+0x1===_0x169911&&_0x4707b0[_0x3d68('0x30')]({'height':_0x15e7f8+'px'});});};$(window)['on'](_0x3d68('0x9d'),_0x49cb1f),_0x49cb1f();}function _0x205ff3(){var _0x4707b0=function(_0x4707b0,_0x169911,_0x15e7f8,_0x24a032){0x1===_0x4707b0?$(_0x169911)[_0x3d68('0xfc')]({'startVal':0x0,'endVal':_0x15e7f8,'duration':void 0x0===_0x24a032?1.5:_0x24a032}):$(_0x169911)[_0x3d68('0x40')](CountUp[_0x3d68('0x7d')](_0x15e7f8));};switch(_0x3e44d6()){case'':case'index':case _0x3d68('0xa'):_0x27c057(function(_0x169911){_0x4707b0(_0x169911,_0x3d68('0xfd'),_0x13a3da[_0x3d68('0x1f')][_0x3d68('0x20')],2.5);});break;case _0x3d68('0xfe'):case _0x3d68('0xb'):_0x27c057(function(_0x169911){_0x4707b0(_0x169911,_0x3d68('0xff'),_0x13a3da[_0x3d68('0x1f')]['reserve']),_0x4707b0(_0x169911,_0x3d68('0x100'),_0x13a3da[_0x3d68('0x1f')][_0x3d68('0x101')]),_0x4707b0(_0x169911,_0x3d68('0x102'),_0x13a3da[_0x3d68('0x1f')][_0x3d68('0x48')]),_0x4707b0(_0x169911,_0x3d68('0x103'),_0x13a3da[_0x3d68('0x1f')][_0x3d68('0x104')]),_0x4707b0(_0x169911,'#balance-build',_0x13a3da[_0x3d68('0x26')][_0x3d68('0x61')]),_0x4707b0(_0x169911,_0x3d68('0x105'),_0x13a3da[_0x3d68('0x26')][_0x3d68('0x85')]),_0x4707b0(_0x169911,_0x3d68('0x106'),_0x13a3da[_0x3d68('0x25')]),_0x4707b0(_0x169911,_0x3d68('0x107'),_0x13a3da['builds_per_hour']),$(_0x3d68('0x108'))[_0x3d68('0x5c')](function(){_0x4707b0(_0x169911,$(this),_0x13a3da['builds'][$(this)[_0x3d68('0x5d')](_0x3d68('0x109'))-0x1]);});});}}function _0x8b12b8(){tronapp(function(_0x4707b0){if(_0x4707b0){var _0x169911=tronapp[_0x3d68('0x10')]();tronWeb['on'](_0x3d68('0x10a'),function(_0x4707b0){_0x4707b0[_0x3d68('0x10b')]!==_0x169911&&location[_0x3d68('0x10c')]();});}});}function _0x8a3f9e(){$(_0x3d68('0x10d'))['on'](_0x3d68('0x60'),function(){tronapp(function(_0x4707b0){_0x4707b0?document[_0x3d68('0x29')][_0x3d68('0x2d')]='play.html':$(_0x3d68('0x2b'))[_0x3d68('0x87')](_0x3d68('0x2c'));});});}function _0x8b6c91(){var _0x4707b0=function(){[{'modal':$(_0x3d68('0x10e')),'modalOuter':$('#faq-modal-inner')[_0x3d68('0x10f')]()[_0x3d68('0x10f')](),'width':0x1d1,'height':0x288,'fit':!0x0,'minMargin':0xa},{'modal':$('#wallet-modal-inner'),'modalOuter':$(_0x3d68('0x110'))[_0x3d68('0x10f')]()[_0x3d68('0x10f')](),'width':0x1d1,'height':0x17b,'fit':!0x0,'minMargin':0xa},{'modal':$('#buyModalInner'),'modalOuter':$(_0x3d68('0x111'))[_0x3d68('0x10f')](),'addHeight':0x0,'minMargin':0x28}][_0x3d68('0x41')](function(_0x4707b0){var _0x169911=_0x4707b0[_0x3d68('0x87')],_0x15e7f8=_0x4707b0[_0x3d68('0x112')],_0x24a032=_0x15e7f8['is'](_0x3d68('0x113'));_0x24a032||_0x15e7f8[_0x3d68('0x2c')]();var _0x4509ef=_0x169911[_0x3d68('0xe2')](),_0x39e49a=_0x169911[_0x3d68('0xfb')]();if(_0x24a032||_0x15e7f8[_0x3d68('0x8f')](),void 0x0!==_0x4707b0[_0x3d68('0x114')]&&(_0x39e49a+=_0x4707b0[_0x3d68('0x114')]),!0x0===_0x4707b0['fit']){var _0x49f454=_0x4707b0[_0x3d68('0xe2')];_0x39e49a=_0x4509ef*_0x4707b0[_0x3d68('0xfb')]/_0x49f454,_0x39e49a>window[_0x3d68('0x115')]-_0x4707b0[_0x3d68('0x116')]&&(_0x39e49a=window[_0x3d68('0x115')]-_0x4707b0[_0x3d68('0x116')]),_0x169911[_0x3d68('0x30')]({'height':_0x39e49a+'px'});}var _0x27c057=(window['innerHeight']-_0x39e49a)/0x2;_0x27c057=_0x27c057<_0x4707b0['minMargin']?_0x4707b0['minMargin']:_0x27c057,_0x169911['css']({'margin-top':_0x27c057+'px','margin-bottom':0x0});});};$(window)['on'](_0x3d68('0x9d'),_0x4707b0),_0x4707b0();}function _0x4fa077(){$(_0x3d68('0x117'))[_0x3d68('0x34')](tronapp['getAddress']()+_0x3d68('0x118')),$('#village-link')['attr'](_0x3d68('0x2d'),'https://tronscan.org/#/address/'+tronapp[_0x3d68('0x10')]());}function _0x1db071(){$(_0x3d68('0x119'))[_0x3d68('0x40')](_0x13d0ca[_0x3d68('0x7a')]);}function _0x3e44d6(){var _0x4707b0=window[_0x3d68('0x29')][_0x3d68('0x2a')];return _0x4707b0[_0x3d68('0x11a')](_0x4707b0[_0x3d68('0x11b')]('/')+0x1);}function _0x263bda(){var _0x4707b0=window['location'][_0x3d68('0x11c')][_0x3d68('0x7c')](0x1);return null!=_0x4707b0&&''!=_0x4707b0?function(_0x4707b0){for(var _0x169911={},_0x15e7f8=_0x4707b0['split']('&'),_0x24a032=0x0;_0x24a032<_0x15e7f8[_0x3d68('0xd')];_0x24a032++){var _0x4509ef=_0x15e7f8[_0x24a032][_0x3d68('0x11d')]('=');_0x169911[_0x4509ef[0x0]]=_0x4509ef[0x1];}return _0x169911;}(_0x4707b0):{};}var _0x13d0ca,_0x13a3da={},_0x232c7e=function(_0x4707b0){_0x169911(_0x4707b0);};!function(_0x4707b0){window[_0x3d68('0x11e')]=_0x4707b0;}(_0x232c7e);}();
