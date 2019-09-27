document.addEventListener('DOMContentLoaded', () => {

  const gameDiv = document.querySelector('#game-container')
  const demandDiv = document.querySelector('#demand-container')

  const demands = {
    editor: 50,
    military: 50,
    people: 50,
    bank: 50
  }

  const demandsMet = function(){
    for(demand in demands){
      if(demand <= 0){
        return false;
      }
    }
  }

  const demandGenerator = function(){
    demandDiv.innerHTML = '';
    for(key in demands){
      let h1 = document.createElement('h1');
      h1.textContent = `${key.toUpperCase()}: ${demands[key]}`;
      h1.id = key;
      demandDiv.appendChild(h1);
    }
  }

  const affectdemands = function(effect){
    demands[effect.affected] += effect.value;
  }

  const Effect = function(affected, value){
    this.church = church;
    this.military = military;
    this.people = people;
    this.military = military;
  }

  const Question = function(issue, option1, option2){
    this.issue = issue;
    this.option1 = option1;
    this.option2 = option2;
  }

  const Option = function(action, effect){
    this.action = action;
    this.effect = effect;
  }

  demandGenerator();

  const effect1 = new Effect("church", -10);
  const effect2 = new Effect("people", -10);
  const option1 = new Option("nope!", effect1);
  const option2 = new Option("yep!", effect2);

  const question = new Question('Does God exist?', option1, option2);

  const questionDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = question.issue;
  const button1 = document.createElement('button');
  button1.textContent = question.option1.action;

  button1.addEventListener('click', () => {
    affectdemands(question.option1.effect);
    demandGenerator();
  })

  const button2 = document.createElement('button');
  button2.textContent = question.option2.action;

  button2.addEventListener('click', () => {
    affectdemands(question.option2.effect);
    demandGenerator();
  })

  questionDiv.appendChild(h1);
  questionDiv.appendChild(button1);
  questionDiv.appendChild(button2);

  gameDiv.appendChild(questionDiv);


})
