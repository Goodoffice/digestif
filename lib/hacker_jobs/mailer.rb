module Digestif

  class Mailer
    def self.run
      new.run
    end

    def initialize
    end

    def run
      SourceList.find_each do |source_list|
        DigestMailer.daily(source_list.id).deliver_now
      end
    end
  end

end

