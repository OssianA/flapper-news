class Post < ActiveRecord::Base

	 has_many :comments
	 before_create :default_vote

	 def default_vote
	 	self.upvotes = 0
	 	
	 end

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
