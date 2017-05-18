class AddDefaultUser < ActiveRecord::Migration[5.1]
  def change

    User.create!(
      email: 'root@teejayvanslyke.com',
      password: '72EKviPHQK3QBum',
      password_confirmation: '72EKviPHQK3QBum'
    )

  end
end
