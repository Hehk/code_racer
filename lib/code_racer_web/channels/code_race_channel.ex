defmodule CodeRacerWeb.CodeRaceChannel do
  @moduledoc """
  Manages the game race channel

  Two kinds of user are allowed
  - viewers: just get broadcasts of current game changes
  - players: viewers + the ability to input to the game
  """
  use Phoenix.Channel

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

  def join("code_race:" <> race_id, %{"params" => %{"userId" => user_id}}, socket) do
    {:ok, @sample_code, assign(socket, :race_id, race_id)}
  end

end
