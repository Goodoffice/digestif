require 'rails_helper'

RSpec.describe SourceList, type: :model do
  it { should have_many(:sources) }
  it { should validate_presence_of(:name) }
end

