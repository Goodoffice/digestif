class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  acts_as_reader

  has_many :stars
  has_many :entries, through: :stars

  def star!(entry)
    self.stars.create!(entry_id: entry.id)
  end

  def unstar!(entry)
    star = self.stars.find_by_entry_id(entry.id)
    star.destroy!
  end

  def starred?(entry)
    !! self.stars.find_by_entry_id(entry.id)
  end
end
