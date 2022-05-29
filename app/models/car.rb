
# == Schema Information
#
# Table name: cars
#
#  id                      :integer          not null, primary key
#  manufacturer            :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#
class Car < ApplicationRecord
    # Each car (manufacturer) has many variants (model, year, color)
    has_many :variants
    accepts_nested_attributes_for :variants, reject_if: :all_blank, allow_destroy: true
end
