class CreateParticipants < ActiveRecord::Migration[6.1]
  def change
    create_table :participants do |t|
      t.string :name, null: false
      t.integer :bracket_id, null: false

      t.timestamps
    end
  end
end
