module HackerJobs

  class MailPreview < MailView

    def daily_digest
      DigestMailer.daily(SourceList.last.id)
    end

  end

end
