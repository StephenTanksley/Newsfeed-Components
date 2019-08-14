/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [{
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>
*/
// What do I need this function to do?


//div container which contains the rest of the items in the NodeList.

// function articleMaker(array) {
//   const article = document.createElement('div');
//   article.classList.add('article');

//   //tite element

//   const title = document.createElement('h2');
//   title.textContent = array.title;
//   article.appendChild(title);

//   //date element

//   const date = document.createElement('p');
//   date.textContent = array.date;
//   date.classList.add('date');
//   article.appendChild(date);


// //   //paragraph tags

// //maybe there's a way of making this more DRY? I'm going to try using a range to say "if the index is greater than or equal to 2, create a new P tag and assign the output to that P tag."

//   const p1 = document.createElement('p');
//   p1.textContent = array.firstParagraph;
//   article.appendChild(p1);

//   const p2 = document.createElement('p');
//   p2.textContent = array.secondParagraph;
//   article.appendChild(p2);

//   const p3 = document.createElement('p');
//   p3.textContent = array.thirdParagraph;
//   article.appendChild(p3);

//   //expander span

//   const expander = document.createElement('span');
//   expander.classList.add('expandButton');
//   article.appendChild(expander);

//   expander.addEventListener('click', (e) => {
//     e.currentTarget.classList.toggle('article-open')
//   });

//   return article;
// }

const articlesContainer = document.querySelector('.articles')


function articleMaker(object) {

  //article container - this should contain all of the elements of the article - title, date, paragraphs.
  const article = document.createElement('div');
  article.classList.add('article');
  articlesContainer.appendChild(article);


  // title header - this should reference the object and add the title to the article.
  const title = document.createElement('h2');
  title.textContent = object.title;
  article.appendChild(title);

  // date element

  const date = document.createElement('p');
  date.textContent = object.date;
  date.classList.add('date');
  article.appendChild(date);

  function paragraphMaker(object, i) {
    if (object[i > 1] === true) {
      const paragraph = document.createElement('p');
      paragraph.textContent = object.map([i]);
      article.appendChild(paragraph);
      return paragraph;
    }
  }

  const p1 = document.createElement('p');
  p1.textContent = object.firstParagraph;
  article.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = object.secondParagraph;
  article.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = object.thirdParagraph;
  article.appendChild(p3);

  const expander = document.createElement('span')
    expander.classList.add('expandButton')

    expander.addEventListener('click', (e) => {
      event.target.classList.toggle('article-open')
    });

  return article;
}

data.forEach(function (item) {
  articleMaker(item);
});

//   //- Try to make into an array and then map each item into a new <p> tag based on the length of the array. 

//   //if([i > 1] {
//   // create new <p> tag, add the text content at the current index until you run out of indexes
//   // })



//   // if (i > 0 && i < 7) {
//   //   element.textContent = siteContent['nav'][`nav-item-${i++}`];
//   // }



//   const p1 = document.createElement('p');
//   p1.textContent = object.firstParagraph;
//   article.appendChild(p1);

//   const p2 = document.createElement('p');
//   p2.textContent = object.secondParagraph;
//   article.appendChild(p2);

//   const p3 = document.createElement('p');
//   p3.textContent = object.thirdParagraph;
//   article.appendChild(p3);

//   //expander span

//   const expander = document.createElement('span');
//   expander.classList.add('expandButton');
//   article.appendChild(expander);

//   expander.addEventListener('click', (e) => {
//     e.currentTarget.classList.toggle('article-open')
//   });

//   // article.appendChild(paragraphMaker(data));
//   // article.appendChild(paragraphMaker(data));


// }

// articlesContainer.appendChild(articleMaker(data));

//need to map over these elements






























/* I need the function to:

1) create a div element with a class of "article" -> DONE

    const article = document.createElement('div');
    article.classList.add('article');


  2) Inside that div, create an h2 element with textContent ${title} -> DONE

    const title = document.createElement('h2')
    title.textContent = data.title (not sure about formatting here)

  3) Below that h2, create a <p> element with a class of ${date} that adds the date the article was published. -> DONE

    const date = document.createElement('p')
    date.classList.add('date');

  4) I need three separate paragraph elements mapped to ${firstParagraph} ${secondParagraph} and ${thirdParagraph}

    const p1 = document.createElement('p') //maybe there's a way of making this more DRY?
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

  5) I need to create a span element with a class of 'expandButton'

    const expander = document.createElement('span')
    expander.classList.add('expandButton')

6) Add event listener to expandButton span. span.addEventListener('click', (e) => )

 expander.addEventListener('click' (e) => {
    event.target.classList.toggle('article-open')
  });


  return (function that includes everything)
/*
  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div. -> DONE

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

  (create a new article)

*/