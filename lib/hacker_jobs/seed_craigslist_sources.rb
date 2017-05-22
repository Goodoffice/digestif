require 'colorize'
require 'open-uri'
require 'nokogiri'

module HackerJobs

  class SeedCraigslistSources

    def self.run
      new.run
    end

    def initialize
    end

    def us_cities_page
    end

    def run
      page = Nokogiri::HTML(open("https://geo.craigslist.org/iso/us"))
      page.css('.geo-site-list li a').each do |a_tag|
        name = a_tag.text
        base_uri = a_tag.attribute('href').value

        puts name.green

        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/sof?is_telecommuting=1&format=rss"
        )

        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/web?is_telecommuting=1&format=rss"
        )

        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/cpg?format=rss"
        )
      end
    end

  end

end

