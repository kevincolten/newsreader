class FeedsController < ApplicationController
  before_filter :check_update_time, :validate_user

  def index
    @feeds = Feed.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :index, :handlers => [:rabl] }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    @entries = Feed.find(params[:id]).entries
    render "show.rabl"
  end

  def update
    @feed = Feed.find(params[:id])
    @feed.update_attributes()
  end

  def check_update_time
    now = Time.now
    feeds = Feed.all
    feeds.each do |feed|
      feed.reload if now - feed.updated_at > 120
    end
  end
end
