class Consumer {
	constructor(sentence) {
  	this.element = sentence;
    this.sentence = sentence.innerText || sentence.value;
    this.position = 0;
    this.matchers = [];
  }
  
  match(expected) {
    if (typeof(expected) == "object" && expected.indexOf(this.lookahead()) > -1) {
    	this.matchers.push(this.lookahead());
      this.position++;
    } else if (expected === this.lookahead()) {
    	this.matchers.push(expected);
      this.position++;
    } else {
    	throw new Error("expected " + expected + " but found " + this.lookahead());
    }
  }
  
  lookahead() {
  	return this.sentence[this.position];
  }
  
  evaluate() {
    if (!this.sentence) {
      return;
    }

  	eval(editor.getValue());
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

function evaluateSentences(event) {
  event.preventDefault();

	var sentences = document.querySelectorAll('.sentence');
	var results = document.querySelectorAll('.result');
  var index = 0;
  sentences.forEach(function(sentence) {
  	var consumer = new Consumer(sentence);
    try {
      results[index].innerHTML = '';
      consumer.evaluate();
    } catch(e) {
      results[index].innerHTML = (sentence.innerText || sentence.value) + ' - ' + e;
    }
    index++;
  });
}

var evaluateButton = document.getElementById('evaluate');
if (evaluateButton) {
  evaluateButton.onclick = evaluateSentences;
}

