class User < ActiveRecord::Base
  attr_accessible :password_digest, :session_token, :username


  def password=(password)
    self.password_digest = password
  end

  def generate_token
    new_token = SecureRandom.urlsafe_base64(16)
    self.session_token = new_token
    self.save!
    new_token
  end

end
