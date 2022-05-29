class CarsController < ApplicationController
  before_action :set_car, only: %i[ show edit update destroy ]

  # GET /cars or /cars.json
  def index
    @cars = Car.all
  end

  def update
    if car.update(car_params)
      redirect_to cars_path
    else
      render :edit
    end
  end

  private

  def car_params
    params
      .require(:car)
       .permit(
         variants_attributes: [:_destroy, :id, :model]
       )
  end
end