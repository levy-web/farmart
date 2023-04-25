require 'rails_helper'
require 'factory_bot_rails'

RSpec.describe UsersController, type: :controller do
  describe "GET #index" do
    it "returns a successful response" do
      get :index
      expect(response).to be_successful
    end

    it "assigns all users to @users" do
      users = FactoryBot.create_list(:user, 3)
      get :index
      expect(assigns(:users)).to match_array(users)
    end
  end

  describe "GET #show" do
    let(:user) { FactoryBot.create(:user) }

    it "returns a successful response" do
      get :show, params: { id: user.id }
      expect(response).to be_successful
    end

    it "assigns the requested user to @user" do
      get :show, params: { id: user.id }
      expect(assigns(:user)).to eq(user)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      let(:valid_attributes) { FactoryBot.attributes_for(:user) }

      it "creates a new user" do
        expect {
          post :create, params: valid_attributes
        }.to change(User, :count).by(1)
      end

      it "returns a success response with the new user" do
        post :create, params: valid_attributes
        expect(response).to be_successful
        expect(response.body).to include(valid_attributes[:username])
      end
    end

    context "with invalid params" do
      let(:invalid_attributes) { { username: "", email: "invalid_email" } }

      it "does not create a new user" do
        expect {
          post :create, params: invalid_attributes
        }.to_not change(User, :count)
      end

      it "returns an unprocessable_entity response with error messages" do
        post :create, params: invalid_attributes
        expect(response.status).to eq(422)
        expect(response.body).to include("Username can't be blank", "Email is invalid")
      end
    end
  end

  describe "PATCH #update" do
    let(:user) { FactoryBot.create(:user) }

    context "with valid params" do
      let(:new_attributes) { { username: "new_username" } }

      it "updates the requested user" do
        patch :update, params: { id: user.id, user: new_attributes }
        user.reload
        expect(user.username).to eq(new_attributes[:username])
      end

      it "returns a success response with the updated user" do
        patch :update, params: { id: user.id, user: new_attributes }
        expect(response).to be_successful
        expect(response.body).to include(new_attributes[:username])
      end
    end

    context "with invalid params" do
      let(:invalid_attributes) { { username: "" } }

      it "does not update the requested user" do
        original_username = user.username
        patch :update, params: { id: user.id, user: invalid_attributes }
        user.reload
        expect(user.username).to eq(original_username)
      end

      it "returns an unprocessable_entity response with error messages" do
        patch :update, params: { id: user.id, user: invalid_attributes }
        expect(response.status).to eq(422)
        expect(response.body).to include("Username can't be blank")
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:user) { create(:user) }

    context "when user exists" do
      it "destroys the user" do
        expect {
          delete :destroy, params: { id: user.id }
        }.to change(User, :count).by(-1)
      end

      it "returns status code 204" do
        delete :destroy, params: { id: user.id }
        expect(response).to have_http_status(204)
      end
    end

    context "when user does not exist" do
      it "returns status code 404" do
        delete :destroy, params: { id: 0 }
        expect(response).to have_http_status(404)
      end

      it "returns a not found error message" do
        delete :destroy, params: { id: 0 }
        expect(JSON.parse(response.body)).to eq({"error" => "Couldn't find User with 'id'=0"})
      end
    end
  end

  end
