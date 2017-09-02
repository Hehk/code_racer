defmodule CodeRacerRace.ServerTest do
  use ExUnit.Case
  alias CodeRacerRace.Server

  @sample_code """
  current_process = self()

  # Spawn an Elixir process (not an operating system one!)
  spawn_link(fn ->
    send current_process, {:msg, "hello world"}
  end)

  # Block until the message is received
  receive do
    {:msg, contents} -> IO.puts contents
  end
  """

  setup do
    {:ok, pid} = Server.start_link(@sample_code)
    {:ok, server: pid}
  end

  describe "add_user/2" do
    test "=> add new user to server", %{server: pid} do
      user_id = :test
      user = Server.add_user(pid, user_id)
     
      assert user.id == user_id
    end
  end

  describe "get_users/1" do
    test "=> get all current users", %{server: pid} do
      Server.add_user(pid, "new_user_1")
      Server.add_user(pid, "new_user_1")
      users = Server.get_users(pid)

      assert length(users) >= 2
    end
  end


end
