class AddMakeToVariants < ActiveRecord::Migration[7.0]
  def change
    add_column :variants, :model, :string
    add_column :variants, :year, :integer
    add_column :variants, :color, :string
  end
end
