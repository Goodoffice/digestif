
lock '3.8.1'
set :application, 'digestif'
set :repo_url, 'git@github.com:teejayvanslyke/digestif.git'
set :deploy_to, "/home/deploy/digestif"
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')
set :yarn_flags, '--silent --no-progress'

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end

end

namespace :digestif do

  task :mail do
    on roles(:all) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'digestif:mail'
        end
      end
    end
  end

end
