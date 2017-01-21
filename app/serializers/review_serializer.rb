class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :score, :user_id

  has_one :user
end
