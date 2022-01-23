class CreateBrackets < ActiveRecord::Migration[6.1]
  def change
    create_table :brackets do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :usernames, default: [], array: true
      t.integer :size, null: false

      t.timestamps
    end
  end
end
