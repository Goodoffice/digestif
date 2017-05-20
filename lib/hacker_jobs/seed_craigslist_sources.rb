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

        [ "freelance%20developer", "freelance%20designer" ].each do |query|
          Source.create!(
            name: "craigslist: #{name}",
            url: "#{base_uri}/search/jjj?is_telecommuting=1&query=#{query}&sort=rel&format=rss"
          )
        end
      end
    end

  end

end

