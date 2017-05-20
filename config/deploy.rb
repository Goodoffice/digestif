
lock '3.8.1'
set :application, 'digestif'
set :repo_url, 'git@github.com:teejayvanslyke/digestif.git'
set :deploy_to, "/home/deploy/digestif"
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/assets', 'public/packs')

namespace :deploy do
  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end

  Rake::Task["deploy:compile_assets"].clear

  desc "Precompile assets locally and then rsync to web servers"
  task :compile_assets do
    run_locally do
      with rails_env: :production do
        execute "RAILS_ENV=#{fetch(:stage)} bundle exec rake assets:precompile"
      end
    end

    #=====================================================================#
    # rsync to each server
    local_dir = "./public/assets/"
    on roles(:web) do
      # this needs to be done outside run_locally in order for host to exist
      remote_dir = "#{host.user}@#{host.hostname}:#{shared_path}/public/assets/"

      run_locally { execute "rsync -av --delete #{local_dir} #{remote_dir}" }
    end

    # clean up
    run_locally { execute "rm -rf #{local_dir}" }


    #=====================================================================#
    # rsync packs to each server
    local_dir = "./public/packs/"
    on roles(:web) do
      # this needs to be done outside run_locally in order for host to exist
      remote_dir = "#{host.user}@#{host.hostname}:#{shared_path}/public/packs/"

      run_locally { execute "rsync -av --delete #{local_dir} #{remote_dir}" }
    end

    # clean up
    run_locally { execute "rm -rf #{local_dir}" }
  end

  after :updated, "deploy:compile_assets"

end

