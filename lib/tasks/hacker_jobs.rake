require 'hacker_jobs/poller'
require 'hacker_jobs/mailer'

namespace :hacker_jobs do
  task :ingest => :environment do
    HackerJobs::Poller.run
  end

  task :mail => :environment do
    HackerJobs::Mailer.run
  end
end
