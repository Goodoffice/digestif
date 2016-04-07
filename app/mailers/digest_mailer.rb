class DigestMailer < ApplicationMailer
  include Roadie::Rails::Automatic
  
  layout 'email'
  default from: 'Digestif <no-reply@digestif.co>'

  def daily(source_list_id)
    @source_list = SourceList.find(source_list_id)
    mail to: 'tj@guilded.co', subject: "#{@source_list.name} for #{Time.now}"
  end

end
