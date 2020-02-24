if (this.lookahead() == 'i') {
  this.match('i');
  this.match('f');
}

if (this.lookahead() == 'e') {
  this.match('e');
  this.match('l');
  this.match('s');
  this.match('e');
}

if (this.lookahead() == 'f') {
  this.match('f');
  this.match('o');
  this.match('r');
  if (this.lookahead() == 'e') {
    this.match('e');
    this.match('a');
    this.match('c');
    this.match('h');
  }
}

if (this.lookahead() == 'w') {
  this.match('w');
  this.match('h');
  this.match('i');
  this.match('l');
  this.match('e');
}
