class ExercisesController < ApplicationController
  def show
    @exercises = Exercise.order_by(:position.asc)
    @exercise = Exercise.find params[:id]
  end
end
