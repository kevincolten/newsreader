class CreateFavoriteFeeds < ActiveRecord::Migration
  def change
    create_table :favorite_feeds do |t|
      t.integer :user_id
      t.integer :feed_id

      t.timestamps
    end

    add_index :favorite_feeds, :user_id
    add_index :favorite_feeds, :feed_id
  end
end
