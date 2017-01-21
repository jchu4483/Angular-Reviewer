class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by_id(params[:id])
    render json: review
  end

  def create
    review = current_user.reviews.build(review_params)
    if review.save
      render json: {status: 'ok'}
    else
      render json: {reviews_errors: review.errors.full_messages}
    end
  end

  private

    def review_params
      params.require(:review).permit(:content, :score, :title)
    end
end
