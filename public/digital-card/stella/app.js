'use strict';
const shareDialog = document.querySelector('#shareDialog');
document.querySelector('#share').addEventListener('click', async () => {
 if (location.hostname==='127.0.0.1'||location.hostname==='localhost') {shareDialog.showModal();return;}
 const lang=document.documentElement.lang;
 const url='https://actartcenter.com/card/stella';
 try {
  if(navigator.share){await navigator.share({title:'Stella Ko · ACT ART CENTER',url});return;}
  if(!navigator.clipboard)throw new Error('Clipboard unavailable');
  await navigator.clipboard.writeText(url);
  shareDialog.querySelector('p').textContent=lang==='en'?'Card link copied. You can also copy the URL below.':'명함 링크를 복사했습니다. 아래 주소로도 공유할 수 있습니다.';
 }catch(error){if(error.name==='AbortError')return;shareDialog.querySelector('p').textContent=lang==='en'?'Copy the card URL below.':'아래 명함 주소를 복사해 공유해 주세요.';}
 let field=shareDialog.querySelector('input');
 if(!field){field=document.createElement('input');field.className='share-url';field.readOnly=true;field.setAttribute('aria-label',lang==='en'?'Card URL':'명함 주소');shareDialog.insertBefore(field,document.querySelector('#closeDialog'));}
 field.value=url;shareDialog.showModal();
});
document.querySelector('#closeDialog').addEventListener('click', () => shareDialog.close());
const retryLanguage = document.querySelector('#retry-language');
let languageReady = false;
function loadLanguage(){
 if(languageReady)return;
 retryLanguage.disabled=true;
 return Promise.all([fetch('i18n.json').then(r => {if(!r.ok)throw Error('Translations unavailable');return r.json();}),fetch('card-assets.json').then(r => {if(!r.ok)throw Error('Card assets unavailable');return r.json();})]).then(([translations,assets])=>{
 languageReady=true;
 document.querySelector('.language-status').hidden=true;
 document.querySelectorAll('[data-lang]').forEach(b=>{b.disabled=false;});
 function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=translations[el.dataset.i18n][lang];});
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  const en=lang==='en';
  document.title=(en?'Stella Ko':'고은별')+' · ACT ART CENTER';
  const contact=document.querySelector('.primary');contact.href=en?'contact-en.vcf':'contact.vcf';contact.download=en?'Stella_Ko_ACT_ART_CENTER.vcf':'고은별_ACT_ART_CENTER.vcf';
  const image=document.querySelector('#card-image');image.src=assets[`stella-ko-card-${lang}.webp`];image.alt=en?'Stella Ko · ACT ART CENTER business card':'고은별 · ACT ART CENTER 명함';
  document.querySelector('#card-image-link').href=assets[`stella-ko-card-${lang}.png`];document.querySelector('#card-download').href=assets[`stella-ko-card-${lang}.png`];
  document.querySelector('.portrait img').alt=en?'Stella Ko, Director':'고은별 대표';
  document.querySelector('#share').setAttribute('aria-label',en?'Share card information':'명함 공유 안내');
  document.querySelector('.contact').setAttribute('aria-label',en?'Contact details':'연락처');
  try{localStorage.setItem('act-card-language',lang);}catch{}
 }
 document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
 let initial='ko';try{if(localStorage.getItem('act-card-language')==='en')initial='en';}catch{}
 const requested=new URLSearchParams(location.search).get('lang');if(requested==='ko'||requested==='en')initial=requested;
 setLanguage(initial);
}).catch(()=>{document.querySelectorAll('[data-lang]').forEach(b=>{b.disabled=true;});document.querySelector('.language-status').hidden=false;retryLanguage.disabled=false;});
}
retryLanguage.addEventListener('click',loadLanguage);
loadLanguage();
