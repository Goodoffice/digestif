require 'colorize'

module HackerJobs

  class Poller

    def self.run
      new.run
    end

    def initialize
    end

    def run
      Source.find_each do |source|
        puts "↓ #{source.name}".green
        source.ingest_entries!
      end
    end

  end

end

