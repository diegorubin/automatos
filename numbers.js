if (this.lookahead() == '0') { //binary or hex or or octa
  this.match('0');
  if (this.lookahead() == 'b') { //binary
    this.match('b');
    while(this.lookahead() >= '0' && this.lookahead() <= '1') { 
      this.match(this.lookahead()) 
  	}
  } else if (this.lookahead() == 'x') { // hex
    this.match('x');
    while(this.lookahead() >= '0' && this.lookahead() <= '9' ||
         this.lookahead() >= 'a' && this.lookahead() <= 'f') { 
      this.match(this.lookahead()) 
  	}
  } else { // octa
    while(this.lookahead() >= '0' && this.lookahead() <= '7') { 
      this.match(this.lookahead()) 
  	}
  }
} else {
  while(this.lookahead() >= '0' && this.lookahead() <= '9') { 
    this.match(this.lookahead()) 
  }
}
