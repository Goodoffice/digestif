require 'digestif/poller'
require 'digestif/mailer'

namespace :digestif do
  task :ingest => :environment do
    Digestif::Poller.run
  end

  task :mail => :environment do
    Digestif::Mailer.run
  end
end
