class HomeController < ApplicationController
  def index
    @exercises = Exercise.order_by(:position.asc)
  end
end
