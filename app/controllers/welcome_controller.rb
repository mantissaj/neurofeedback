class WelcomeController < ApplicationController
	def index
		@contact = Contact.new
	end

	def create_email
		@contact = Contact.new(params[:contact])
	    @contact.request = request
	    if @contact.deliver
	      redirect_to :root, flash: {notice: 'Thank you for your message. We will contact you soon!'}
	    else	
	      flash.now[:error] = 'Cannot send message.'
   	      render :index
	    end
	end
end