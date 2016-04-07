require 'colorize' 

module Digestif

  class Poller

    def self.run
      new.run
    end

    def initialize
    end

    def run
      SourceList.find_each do |source_list|
        puts source_list.name.blue
        source_list.sources.each do |source|
          puts "↓ #{source.name}".green
          source.ingest_entries!
        end
      end
    end

  end

end

