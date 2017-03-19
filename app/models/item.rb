class Item < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :amount, presence: true
end
