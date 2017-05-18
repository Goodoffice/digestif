class SavedSearch < ApplicationRecord

  def unread_count_for(user)
    Entry.
      search_for(self.query).
      unread_by(user).
      count
  end

end
