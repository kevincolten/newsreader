module SessionsHelper

  def login(user)
    session[:token] = user.generate_token
    current_user = user
  end

  def current_user=(user)
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def logout
    current_user.generate_token
    session[:token] = nil
    @current_user = nil
  end

  def validate_user
    redirect_to new_session_url unless current_user
  end

end
