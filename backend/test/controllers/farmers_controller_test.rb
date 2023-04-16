require "test_helper"

class FarmersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @farmer = farmers(:one)
  end

  test "should get index" do
    get farmers_url, as: :json
    assert_response :success
  end

  test "should create farmer" do
    assert_difference("Farmer.count") do
      post farmers_url, params: { farmer: { contact_info: @farmer.contact_info, farm_name: @farmer.farm_name, location: @farmer.location, user_id: @farmer.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show farmer" do
    get farmer_url(@farmer), as: :json
    assert_response :success
  end

  test "should update farmer" do
    patch farmer_url(@farmer), params: { farmer: { contact_info: @farmer.contact_info, farm_name: @farmer.farm_name, location: @farmer.location, user_id: @farmer.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy farmer" do
    assert_difference("Farmer.count", -1) do
      delete farmer_url(@farmer), as: :json
    end

    assert_response :no_content
  end
end
