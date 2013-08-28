class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:username])
    if @user && @user.password_digest == params[:password]
      login(user)
    else
      render :new
    end
  end

  def destroy
    logout
  end

end
