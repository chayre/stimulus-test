
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
    has_many :variants
end
