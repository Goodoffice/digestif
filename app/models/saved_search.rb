class SavedSearch < ApplicationRecord

  def unread_count_for(user)
  end

  def update_entry_count!
    update_attributes!(
      entry_count:
        Entry.
          search_for(self.query).
          where(['published_at > ? and published_at < ?', 14.days.ago, Time.now ]).
          count
    )
  end

end
