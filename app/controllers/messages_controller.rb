class MessagesController < ApplicationController

  # before_action :room

  def index
    set_room
    @messages = @room.messages
    respond_to :html, :js, :json
  end

  def create
    set_room
    @message = @room.messages.build(message_param)
    @message.username = current_user
    if @message.save
      flash[:success] = "Create message success"
      redirect_to room_messages_path(@room)
    else
      flash.now[:error] = "Cannot create message"
      render "index"
    end
  end

  private
  def set_room
    @room = Room.find(params[:room_id])
  end

  def message_param
    params.require(:message).permit(:username, :content)
  end
end
