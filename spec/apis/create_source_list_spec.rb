require 'rails_helper'

describe "creating a source list", type: :api, vcr: true do

  def valid_post_params
    {
      source_list: {
        name: "Jobs",
        author_attributes: {
          email: 'tj@guilded.co'
        },
        source_urls: [
          'https://weworkremotely.com/categories/2-programming/jobs.rss'
        ]
      }
    }
  end

  def do_post(params)
    post "/api/source_lists", params
  end

  def parsed_response
    JSON.parse last_response.body
  end

  context "with valid parameters" do

    before { do_post(valid_post_params) }

    it "has a success status" do
      expect(last_response.status).to eq(201)
    end

    it "includes the list of sources" do
      expect(parsed_response['source_list']).to have_key('sources')
    end
    
    it "has an ID" do
      expect(parsed_response['source_list']).to have_key('id')
    end

  end

end

