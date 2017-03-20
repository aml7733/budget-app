class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.decimal :amount, precision: 6, scale: 2

      t.timestamps
    end
  end
end
