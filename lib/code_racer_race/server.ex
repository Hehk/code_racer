defmodule CodeRacerRace.Server do
  @moduledoc """
  GenServer for managing a current game
  """
  use GenServer

  defmodule User do
    defstruct id: nil, position: 0
    @type t :: %User{id: String.t, position: non_neg_integer()} 
  end

  # INIT
  # ====

  def start_link(code), do: GenServer.start_link(__MODULE__, code, [])
  def init(code) do
    initial_state = %{
      code: code,
      users: [],
    }
    {:ok, initial_state}
  end

  # CLIENT
  # ======

  @spec add_user(pid(), String.t) :: User.t
  def add_user(pid, user_id),
    do: GenServer.call(pid, {:add_user, user_id})

  @spec get_users(pid()) :: list(User.t)
  def get_users(pid),
    do: GenServer.call(pid, :get_users)

  def validate_move(pid, user_id, input),
    do: GenServer.call(pid, {:validate_move, {user_id, input}})
  def handle_move(pid, user_id, input),
    do: GenServer.cast(pid, {:handle_move, {user_id, input}})

  # SERVER
  # ======

  def handle_call({:add_user, user_id}, _from, state) do
    new_user = %User{id: user_id}
    new_state = %{state | users: [new_user | state.users]} 

    {:reply, new_user, new_state}
  end
  def handle_call(:get_users, _from, state) do
    {:reply, state.users, state}
  end
  def handle_call({:validate_move, {user_id, input}}, _from, state) do
    {:reply, true, state}    
  end
  def handle_cast({:handle_mode, {user_id, input}}, _from, state) do
    {:noreply, state}
  end
end
