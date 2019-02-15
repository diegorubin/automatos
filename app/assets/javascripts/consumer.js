class Consumer {
	constructor(sentence) {
  	this.element = sentence;
    this.sentence = sentence.innerText;
    this.matchers = [];
    this.position = 0;
  }
  
  match(expected, found) {
  	if (expected === found) {
    	this.matchers.push(found);
      this.position++;
    } else {
    	new Error("expected " + expected + " but found " + found);
    }
  }
  
  lookahead() {
  	return this.sentence[this.position];
  }
  
  evaluate() {
  	eval(`
    	this.match('a', this.lookahead());
      this.match('b', this.lookahead());
      this.match('a', this.lookahead());
      this.match('c', this.lookahead());
      this.match('a', this.lookahead());
      
      if (this.lookahead() == 'x' || this.lookahead() == 't') {
        this.match(this.lookahead(), this.lookahead());
      }

    `);
  	this.render();
  }
  
  render() {
    var matches = true;
    var letters = this.sentence.split('');
    for(var i = 0; i < this.matchers.length; i++) {
    	if (letters[i] === this.matchers[i]) {
      	letters[i] = '<b>' + letters[i] + '</b>';
      } else {
        matches = false;
        break;
      }
    }
    if (matches) {
    	this.element.innerHTML = letters.join('');
    }
  }
}

function evaluateSentences() {
	var sentences = document.querySelectorAll('.sentence');
  sentences.forEach(function(sentence) {
  	var consumer = new Consumer(sentence);
    consumer.evaluate();
  });
}
