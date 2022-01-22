class BracketsController < ApplicationController

  before_action :authenticate_user!

  def new
    render :new
  end

  def index
    @brackets = Bracket.all
  end

  def show
    @bracket = Bracket.find(params[:id])
  end

  def create
    @bracket = Bracket.new(bracket_params)

    if @bracket.save
      flash[:notice] = "Bracket saved"
    else
      flash[:alert] = "Bracket not saved"
    end
  end

  def update
    @bracket = Bracket.find(params[:id])

    if @bracket.update(bracket_params)
      flash[:notice] = "Bracket updated"
    else
      flash[:alert] = "Bracket not updated"
    end
  end

  def destroy
    @bracket = Bracket.find(params[:id])

    if @bracket.destroy
      flash[:notice] = "Bracket deleted"
    else
      flash[:alert] = "Bracket not deleted"
    end
  end

  private
  
  def bracket_params
    params.require(:bracket).permit(:name, :organizer_id, :usernames, :size)
  end

end
