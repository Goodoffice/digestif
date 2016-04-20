require "whenever/capistrano"

lock '3.4.1'
set :application, 'digestif'
set :repo_url, 'git@github.com:teejayvanslyke/digestif.git'
set :deploy_to, "/home/deploy/digestif"
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end

end
