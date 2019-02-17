class Exercise
  include Mongoid::Document

  field :title, type: String
  field :position, type: Integer
  field :sentences, type: Array
end
