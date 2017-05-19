class FrontEndDeveloperJobsScraper
  class Crawler
    include Wombat::Crawler

    base_url "http://frontenddeveloperjob.com"
    path "/"

    jobs "css=.jobs .job", :iterator do
      title "css=.title a"
      url({ xpath: ".//a[1]/@href" }) do |href|
        "http://frontenddeveloperjob.com" + href
      end
    end
  end

  def entries
    Crawler.new.crawl["jobs"]
  end
end
