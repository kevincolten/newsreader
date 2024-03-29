class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username(params[:username])
    if @user && @user.password_digest == params[:password]
      login(@user)
      redirect_to root_url
    else
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
