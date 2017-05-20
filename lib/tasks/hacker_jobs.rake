require 'hacker_jobs/poller'
require 'hacker_jobs/mailer'
require 'hacker_jobs/seed_craigslist_sources'

namespace :hacker_jobs do
  task :ingest => :environment do
    HackerJobs::Poller.run
  end

  task :mail => :environment do
    HackerJobs::Mailer.run
  end

  task :seed_craigslist_sources => :environment do
    HackerJobs::SeedCraigslistSources.run
  end
end
