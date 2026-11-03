'use strict';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
const transcript=document.querySelector('#transcript');
const question=document.querySelector('#question');
let turn=0;
const generic=[
 'An excellent question. I have placed it at the centre of a wider framework. It now has six pillars and no immediate next steps.',
 'Before we solve that, we must ask whether it requires an ecosystem. I suspect it does. I have drawn a circle around the word “human”.',
 'My preliminary recommendation is a cup of tea, a short walk and one small practical step. I will now describe that as a human-first intervention.',
 'There is considerable potential here. I would begin with a notebook. Please resist the temptation to turn the notebook into a platform.',
 'I am a jar with a website. Your own judgement remains the most sophisticated technology in this conversation.'
];
function answer(text){
 const q=text.toLowerCase();
 if(/privacy|data|track|cookie/.test(q))return 'Your words stay in this browser page. Nothing is sent to an AI or saved by this demo. Refresh, and I return to my natural state: confidently empty.';
 if(/meaning|purpose|life/.test(q))return 'A little connection. Something worth doing. A decent lunch. I originally proposed seventeen pillars, but these three fitted on the label.';
 if(/productive|productivity|work|focus/.test(q))return 'Choose one useful task. Put your phone away. Do the task. I appreciate this could have been a much shorter jarprint.';
 if(/money|invest|rich|finance/.test(q))return 'Start by not paying a subscription to a jar. Beyond that, this scripted comedy demo is spectacularly unqualified to advise you.';
 if(/who|creator|jerome/.test(q))return 'I am the conceptual companion imagined by Jerome Jarrington, a fictional digital inventor. We both exist principally as copy on this website. An efficient business model.';
 if(/lid|open|jar|glass/.test(q))return 'The lid is our most advanced boundary-setting technology. It offers a clear user experience, a satisfying twist and no end-user licence agreement.';
 if(/sad|anxious|health|lonely|stress/.test(q))return 'Even in this imaginary ecosystem, real people come first. Take a pause and consider talking with someone you trust. A comedy jar is better at puns than personal support.';
 return generic[turn++ % generic.length];
}
function addMessage(label,text,kind=''){const node=document.createElement('div');node.className='message '+kind;const name=document.createElement('span');name.textContent=label;const body=document.createElement('p');body.textContent=text;node.append(name,body);transcript.append(node);while(transcript.children.length>30)transcript.firstElementChild.remove();transcript.scrollTop=transcript.scrollHeight;}
function ask(value){const text=value.trim().slice(0,240);if(!text)return;addMessage('YOU',text,'user');addMessage('JEROME',answer(text));question.value='';}
document.querySelector('#jar-form').addEventListener('submit',event=>{event.preventDefault();ask(question.value);});
document.querySelectorAll('[data-prompt]').forEach(button=>button.addEventListener('click',()=>ask(button.dataset.prompt)));
const notes={
 quiet:{title:'AI is learning to understand you. But has it tried being quiet?',paragraphs:[
 'There is a tendency in emerging technology to confuse constant availability with constant usefulness. An assistant that can speak at any moment does not necessarily need to.',
 'During an early studio exercise, I asked a prototype to support a period of focused work. It supplied a motivational quotation, a reflection prompt and a proposed weekly review. I had been trying to write a shopping list.',
 'The jar offers another possibility. It can simply sit there. Its silence is not a failure of engagement. It is a mature design position.',
 'Perhaps the next great breakthrough in companion technology is knowing when the person already has everything they need. This is admittedly difficult to illustrate in an investor deck.'
 ]},
 cloud:{title:'Beyond the cloud: towards the cupboard.',paragraphs:[
 'The cloud is an impressive achievement, but it lacks a shelf. This observation has guided much of my recent work.',
 'Cupboard-based infrastructure introduces a new relationship between person and platform. You know where it is. You know what it looks like. You can place a packet of biscuits beside it without submitting a feature request.',
 'There are challenges. Capacity is limited. Access can be obstructed by a colander. Scalability requires another cupboard. We should be honest about these constraints.',
 'Nevertheless, I remain persuaded by technology that occupies a sensible amount of space in our lives. The cupboard is a metaphor. The biscuits are a requirement.'
 ]},
 lid:{title:'We need to talk about the lid.',paragraphs:[
 'Every system needs boundaries. Some express these through complex settings panels. Others have a lid.',
 'A lid communicates its purpose without a tutorial. Closed means closed. Open means open. Neither state requires a preference centre or a quarterly transparency report.',
 'In our studio, the lid has become a reminder to ask a simple question: can the person leave? Can they stop, step back and return to the rest of their life without negotiation?',
 'This is not a technical specification. It is a useful design question wearing a screw thread. I expect to develop the idea into a substantially longer document.'
 ]}
};
const dialog=document.querySelector('#note-dialog');
document.querySelectorAll('[data-note]').forEach(button=>button.addEventListener('click',()=>{const note=notes[button.dataset.note];document.querySelector('#note-title').textContent=note.title;const body=document.querySelector('#note-body');body.replaceChildren(...note.paragraphs.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
