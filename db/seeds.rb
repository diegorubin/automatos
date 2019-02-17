Exercise.destroy_all
[
  {title: 'Match Simples', sentences: ['casa']},
  {title: 'Plural', sentences: ['casa', 'casas']},
  {title: 'Números Inteiros', sentences: [
    '1234567890',
    '0b11011',
    '0112345670',
    '0x1234567890abcdef',
  ]},
].each_with_index do |attributes, index|
  attributes[:position] = index
  attributes[:title] = "#{index + 1}. #{attributes[:title]}"
  Exercise.create(attributes)
end
