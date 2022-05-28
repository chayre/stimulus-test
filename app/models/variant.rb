
# == Schema Information
#
# Table name: variants
#
#  id                      :integer          not null, primary key
#  car_id                  :integer          not null, foreign key
#  model                   :string
#  year                    :datetime
#  color                   :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#
class Variant < ApplicationRecord
  belongs_to :car
end
