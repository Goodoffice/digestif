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
      @us_cities_page ||= Nokogiri::HTML(open("https://geo.craigslist.org/iso/us"))
    end

    def run
      us_cities_page.css('.geo-site-list li a').each do |a_tag|
        name = a_tag.text
        base_uri = a_tag.attribute('href').value

        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/cpg?format=rss"
        )
        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/sof?format=rss"
        )
        Source.create!(
          name: "craigslist: #{name}",
          url: "#{base_uri}/search/web?format=rss"
        )
      end
    end

  end

end

