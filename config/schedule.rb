every 1.day, at: '4:30 am' do
  rake 'digestif:mail'
end

every 1.hour do
  rake 'digestif:ingest'
end

