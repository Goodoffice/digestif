require 'rails_helper'

RSpec.describe Source, type: :model, vcr: true do
  it { should belong_to(:list) }
  it { should have_many(:entries) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:url) }

  context "when creating" do
    let(:list) { SourceList.create(name: "Freelance Jobs") }
    subject { list.sources.create(url: "https://weworkremotely.com/jobs.rss") }

    it "assigns a name" do
      expect(subject.name).
        to eq("Remote Jobs: Design, Programming, Rails, Executive, Marketing, Copywriting, and more.")
    end

    it "ingests its entries" do
      expect(subject.entries.count).to eq(25)
    end
  end

  context "when creating with a Craigslist URL" do
    let(:list) { SourceList.create(name: "iPhones") }
    subject { list.sources.create(url: "https://seattle.craigslist.org/search/sss?format=rss&query=iphone%206s&sort=rel") }

    it "assigns a name" do
      expect(subject.name).
        to eq("craigslist seattle | for sale search \"iphone 6s\"")
    end
  end
end
